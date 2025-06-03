// lib/prisma.js - Create this file first
const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
} else {
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
    });
  }
  prisma = global.__prisma;
}

module.exports = prisma;

// resolvers.js - Your main resolver file
const prisma = require('./lib/prisma'); // Adjust path as needed

module.exports = {
  Query: {
    getCourses: async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching courses:', error);
        throw new Error('Failed to fetch courses');
      }
    },

    getCourse: async (_, { id }) => {
      try {
        const course = await prisma.courses.findUnique({
          where: { id },
          include: {
            modules: {
              include: { videos: true },
            },
          },
        });

        if (!course) {
          throw new Error('Course not found');
        }

        return {
          ...course,
          instructorRole: course.instructor_role,
          instructorAvatar: course.instructor_avatar,
          previewVideo: course.preview_video,
        };
      } catch (error) {
        console.error('Error fetching course:', error);
        throw new Error('Failed to fetch course');
      }
    },

    getUserEnrollments: async (_, { userUid }) => {
      try {
        return await prisma.enrollment.findMany({ 
          where: { userUid },
          include: {
            course: true,
          },
        });
      } catch (error) {
        console.error('Error fetching user enrollments:', error);
        throw new Error('Failed to fetch user enrollments');
      }
    },

    getUser: async (_, { uid }) => {
      try {
        const user = await prisma.users.findUnique({ where: { uid } });
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user');
      }
    },

    getAllUsers: async () => {
      try {
        return await prisma.users.findMany();
      } catch (error) {
        console.error('Error fetching all users:', error);
        throw new Error('Failed to fetch users');
      }
    },

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
    },
  },

  Mutation: {
    addCourse: async (_, { data }) => {
      try {
        const {
          modules,
          instructorRole,
          instructorAvatar,
          previewVideo,
          ...courseData
        } = data;

        const course = await prisma.courses.create({
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

        return {
          ...course,
          instructorRole: course.instructor_role,
          instructorAvatar: course.instructor_avatar,
          previewVideo: course.preview_video,
        };
      } catch (error) {
        console.error('Error adding course:', error);
        throw new Error('Failed to add course');
      }
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

    enrollUser: async (_, { userUid, courseId }) => {
      try {
        return await prisma.enrollment.create({ 
          data: { userUid, courseId },
          include: {
            course: true,
            user: true,
          },
        });
      } catch (error) {
        if (error.code === 'P2002') {
          throw new Error('User is already enrolled in this course');
        }
        console.error('Error enrolling user:', error);
        throw new Error('Failed to enroll user');
      }
    },

    completeModule: async (_, { userUid, moduleId }) => {
      try {
        return await prisma.completedModule.create({ 
          data: { userUid, moduleId },
          include: {
            user: true,
            module: true,
          },
        });
      } catch (error) {
        if (error.code === 'P2002') {
          throw new Error('Module already completed by user');
        }
        console.error('Error completing module:', error);
        throw new Error('Failed to complete module');
      }
    },

    addUser: async (_, { uid, name, phone, role }) => {
      try {
        console.log("Adding user with UID:", uid);

        if (!uid || typeof uid !== 'string') {
          throw new Error('UID must be a valid non-empty string');
        }

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
      } catch (error) {
        if (error.code === 'P2002') {
          throw new Error(`User with UID ${uid} already exists.`);
        }
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
        if (error.code === 'P2025') {
          throw new Error('User not found');
        }
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