const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  Query: {
    getCourses: () =>
      prisma.courses.findMany({
        include: {
          modules: {
            include: { videos: true },
          },
        },
      }),

    getCourse: (_, { id }) =>
      prisma.courses.findUnique({
        where: { id },
        include: {
          modules: {
            include: { videos: true },
          },
        },
      }),

    getUserEnrollments: (_, { userUid }) =>
      prisma.enrollment.findMany({ where: { userUid } }),

    getUser: (_, { uid }) =>
      prisma.users.findUnique({ where: { uid } }),

    getAllUsers: () => prisma.users.findMany(),

  getAllEnrolledUsers: async () => {
  try {
    const enrollments = await prisma.enrollments.findMany({
      include: {
        users: true,
        courses: true,
      },
    });

    return enrollments.map((enrollment) => ({
      id: enrollment.id,
      userUid: enrollment.user_uid,
      courseId: enrollment.course_id,
      enrolledAt: enrollment.enrolled_at?.toISOString() ?? null,
      user: enrollment.users,
      course: enrollment.courses,
    }));
  } catch (error) {
    console.error('Error fetching enrolled users:', error);
    throw new Error('Failed to fetch enrolled users');
  }
}

  },

  Mutation: {
    addCourse: async (_, { data }) => {
      const {
        modules,
        instructorRole,
        instructorAvatar,
        previewVideo,
        ...courseData
      } = data;

      return await prisma.courses.create({
        data: {
          ...courseData,
          instructor_role: instructorRole,
          instructor_avatar: instructorAvatar,
          preview_video: previewVideo,
          published: new Date(data.published),
          modules: {
            create: modules.map((module) => ({
              title: module.title,
              videos: {
                create: module.videos.map((video) => ({
                  title: video.title,
                  duration: video.duration,
                  is_preview: video.isPreview,
                  link: video.link,
                })),
              },
            })),
          },
        },
        include: {
          modules: {
            include: {
              videos: true,
            },
          },
        },
      });
    },
    updateCourse: async (_, { id, data }) => {
  try {
    const updatedCourse = await prisma.courses.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        price: data.price,
        instructor: data.instructor,
        instructor_role: data.instructorRole,
        instructor_avatar: data.instructorAvatar,
        duration: data.duration,
        published: data.published ? new Date(data.published) : undefined,
        level: data.level,
        preview_video: data.previewVideo,
      },
      include: {
        modules: {
          include: { videos: true },
        },
      },
    });

    // Optional debug log
    console.log("Updated Course Input:", data);
    console.log("Updated Course DB Record:", updatedCourse);

    // Map snake_case fields to camelCase for GraphQL response
    return {
      ...updatedCourse,
      instructorRole: updatedCourse.instructor_role,
      instructorAvatar: updatedCourse.instructor_avatar,
      previewVideo: updatedCourse.preview_video,
    };
  } catch (error) {
    console.error("Error updating course:", error);
    throw new Error(error.message || "Failed to update course");
  }
},

    // updateCourse: async (_, { id, data }) => {
    //   try {
    //     const updatedCourse = await prisma.courses.update({
    //       where: { id },
    //       data: {
    //         ...data,
    //         instructor_role: data.instructorRole,
    //         instructor_avatar: data.instructorAvatar,
    //         preview_video: data.previewVideo,
    //         published: data.published ? new Date(data.published) : undefined,
    //       },
    //       include: {
    //         modules: {
    //           include: { videos: true },
    //         },
    //       },
    //     });
    //     return updatedCourse;
    //   } catch (error) {
    //     console.log("Update ID:", id);
    //     console.log("Update Data:", data);
    //     console.log("Error Message:", error.message);
    //     console.log("Error Stack:", error.stack);

    //     console.error("Error updating course:", error);
    //     throw new Error("Failed to update course");
    //   }
    // },

    enrollUser: (_, { userUid, courseId }) =>
      prisma.enrollment.create({ data: { userUid, courseId } }),

    completeModule: (_, { userUid, moduleId }) =>
      prisma.completedModule.create({ data: { userUid, moduleId } }),

    addUser: async (_, { uid, name, phone, role }) => {
      try {
        console.log("Adding user with UID:", uid);

        if (!uid || typeof uid !== 'string') {
          throw new Error('UID must be a valid non-empty string');
        }

        try {
          const newUser = await prisma.users.create({
            data: {
              uid,
              name: name || "",
              phone,
              role,
            },
          });

          console.log("User created:", newUser);
          return newUser;
        } catch (createError) {
          if (createError.message.includes('Unique constraint')) {
            throw new Error(`User with UID ${uid} already exists.`);
          }
          throw createError;
        }
      } catch (error) {
        console.error("Detailed error:", error);
        throw new Error("Error creating user: " + error.message);
      }
    },

    updateUser: async (_, { uid, data }) => {
      try {
        const updatedUser = await prisma.users.update({
          where: { uid },
          data,
        });
        return updatedUser;
      } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user");
      }
    },
    addEnroll: async (_, { userUid, courseId }) => {
      try {
        const enrollment = await prisma.enrollments.create({
          data: {
            user_uid: userUid,
            course_id: courseId,
          },
          include: {
            users: true,
            courses: true,
          },
        });

        return {
          id: enrollment.id,
          userUid: enrollment.user_uid,
          courseId: enrollment.course_id,
          enrolledAt: enrollment.enrolled_at.toISOString(),
          user: enrollment.users,
          course: enrollment.courses,
        };
      } catch (error) {
        if (error.code === 'P2002') {
          throw new Error('User is already enrolled in this course.');
        }
        console.error("Error in addEnroll:", error);
        throw new Error('Failed to enroll user.');
      }
    },

  },
};
