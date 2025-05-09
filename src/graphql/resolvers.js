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
      prisma.course.findUnique({ where: { id }, include: { modules: { include: { videos: true } } } }),
    getUserEnrollments: (_, { userUid }) =>
      prisma.enrollment.findMany({ where: { userUid } }),
    getUser: (_, { uid }) =>
      prisma.users.findUnique({ where: { uid } }),
    getAllUsers: () =>
      prisma.users.findMany(),
  },

  Mutation: {
    addCourse: async (_, { data }) => {
      const { modules, instructorRole, instructorAvatar, previewVideo, ...courseData } = data;
    
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
                  link: video.link, // ✅ Add the link field here
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
    
    // addCourse: async (_, { data }) => {
    //   const { modules, instructorRole, instructorAvatar, previewVideo, ...courseData } = data;
    
    //   return await prisma.courses.create({
    //     data: {
    //       ...courseData,
    //       instructor_role: instructorRole,
    //       instructor_avatar: instructorAvatar,
    //       preview_video: previewVideo,
    //       published: new Date(data.published),
    //       modules: {
    //         create: modules.map((module) => ({
    //           title: module.title,
    //           videos: {
    //             create: module.videos.map((video) => ({
    //               title: video.title,
    //               duration: video.duration,
    //               is_preview: video.isPreview,
    //               link: video.link, 
    //             })),
    //           },
    //         })),
    //       },
    //     },
    //     include: {
    //       modules: {
    //         include: {
    //           videos: true,
    //         },
    //       },
    //     },
    //   });
    // },
    
    
    
    // addCourse: async (_, { data }) => {
    //   return await prisma.courses.create({
    //     data: {
    //       ...courseData,
    //       instructor_role: instructorRole,
    //       instructor_avatar: instructorAvatar,
    //       published: new Date(courseData.published),
    //       modules: {
    //         create: modules.map((mod) => ({
    //           title: mod.title,
    //           videos: {
    //             create: mod.videos,
    //           },
    //         })),
    //       },
    //     },
    //     include: {
    //       modules: {
    //         include: {
    //           videos: true,
    //         },
    //       },
    //     },
    //   });
      
      
    //   // return await prisma.course.create({
    //   //   data: {
    //   //     ...courseData,
    //   //     published: new Date(courseData.published),
    //   //     modules: {
    //   //       create: modules.map((mod) => ({
    //   //         title: mod.title,
    //   //         videos: {
    //   //           create: mod.videos,
    //   //         },
    //   //       })),
    //   //     },
    //   //   },
    //   //   include: { modules: { include: { videos: true } } },
    //   // });
    // },

    enrollUser: (_, { userUid, courseId }) =>
      prisma.enrollment.create({ data: { userUid, courseId } }),

    completeModule: (_, { userUid, moduleId }) =>
      prisma.completedModule.create({ data: { userUid, moduleId } }),
    addUser: async (_, { uid, name, phone, role }) => {
      try {
        console.log("Adding user with UID:", uid, "Type:", typeof uid);
        
        if (!uid || typeof uid !== 'string') {
          throw new Error('UID must be a valid non-empty string');
        }

        // Skip checking if user exists - we'll rely on the database's unique constraint
        // and handle the error if it occurs
        
        try {
          // Attempt to create the user directly
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
          // If error contains "duplicate key" it means user already exists
          if (createError.message.includes('Unique constraint')) {
            throw new Error(`User with UID ${uid} already exists.`);
          }
          throw createError; // Re-throw if it's a different error
        }
      } catch (error) {
        console.error("Detailed error:", error);
        throw new Error("Error creating user: " + error.message);
      }
    }
  },
};