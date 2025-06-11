const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  Query: {
    getCourses: async () => {
      const courses = await prisma.courses.findMany({
        include: {
          modules: {
            include: { videos: true },
          },
        },
      });

      
      return courses.map(course => ({
        ...course,
        instructorRole: course.instructor_role,
        instructorAvatar: course.instructor_avatar,
        previewVideo: course.preview_video,
      }));
    },

    getCourse: (_, { id }) =>
      prisma.courses.findUnique({
        where: { id },
        include: {
          modules: {
            include: { videos: true },
          },
        },
      }),

getUserEnrollments: async (_, { userUid }) => {
  const enrollments = await prisma.enrollments.findMany({
    where: { user_uid: userUid },
    include: {
      courses: {
        include: {
          modules: {
            include: {
              videos: true,
            },
          },
        },
      },
    },
  });

  return enrollments.map(e => ({
    id: e.id,
    userUid: e.user_uid,
    courseId: e.course_id,
    enrolledAt: e.enrolled_at?.toISOString() ?? null,
    course: {
      ...e.courses,
      modules: e.courses.modules.map(m => ({
        ...m,
        videos: m.videos,
      })),
    },
  }));
}


,

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
          published: data.published ? new Date(data.published) : undefined,
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

        console.log("Updated Course Input:", data);
        console.log("Updated Course DB Record:", updatedCourse);

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

    enrollUser: (_, { userUid, courseId }) =>
      prisma.enrollments.create({ data: { user_uid: userUid, course_id: courseId } }),

    completeModule: (_, { userUid, moduleId }) =>
      prisma.completed_modules.create({ data: { user_uid: userUid, module_id: moduleId } }),

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
              mobile: false,
              pc: false
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
