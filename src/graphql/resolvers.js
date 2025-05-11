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
            ...data,
            instructor_role: data.instructorRole,
            instructor_avatar: data.instructorAvatar,
            preview_video: data.previewVideo,
            published: data.published ? new Date(data.published) : undefined,
          },
          include: {
            modules: {
              include: { videos: true },
            },
          },
        });
        return updatedCourse;
      } catch (error) {
        console.error("Error updating course:", error);
        throw new Error("Failed to update course");
      }
    },

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
  },
};
