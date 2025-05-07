const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    myEnrolledCourses: async (_, __, context) => {
      const userId = context.userId; // From JWT/auth middleware

      const enrollments = await prisma.enrollments.findMany({
        where: { user_id: userId },
        include: {
          courses: {
            include: {
              modules: { orderBy: { position: 'asc' } },
            },
          },
        },
      });

      return enrollments.map((enrollment) => enrollment.courses);
    },

    getCourses: () => prisma.courses.findMany(),
    getCourse: (_, { id }) => prisma.courses.findUnique({ where: { id: parseInt(id) } }),
  },

  Mutation: {
    enrollInCourse: async (_, { courseId }, context) => {
      const userId = context.userId;

      const enrollment = await prisma.enrollments.create({
        data: {
          user_id: userId,
          course_id: parseInt(courseId),
        },
        include: {
          courses: true,
        },
      });

      return enrollment;
    },

    markModuleComplete: async (_, { moduleId }, context) => {
      const userId = context.userId;

      await prisma.module_completion.upsert({
        where: {
          user_id_module_id: {
            user_id: userId,
            module_id: parseInt(moduleId),
          },
        },
        update: {}, // Do nothing if exists
        create: {
          user_id: userId,
          module_id: parseInt(moduleId),
        },
      });

      return true;
    },
  },

  Course: {
    modules: async (parent, _, context) => {
      const userId = context.userId;

      const modules = await prisma.modules.findMany({
        where: { course_id: parent.id },
        orderBy: { position: 'asc' },
      });

      const completions = await prisma.module_completion.findMany({
        where: {
          user_id: userId,
          module_id: { in: modules.map((m) => m.id) },
        },
      });

      const completedMap = new Set(completions.map((c) => c.module_id));

      return modules.map((mod) => ({
        ...mod,
        completed: completedMap.has(mod.id),
      }));
    },
  },
};

module.exports = { resolvers };
