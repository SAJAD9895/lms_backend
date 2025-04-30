const courseResolvers = {
    Query: {
      getCourses: async (_, __, { prisma }) => {
        return prisma.course.findMany();
      },
  
      getCourse: async (_, { id }, { prisma }) => {
        return prisma.course.findUnique({
          where: { id: parseInt(id) },
        });
      },
  
      myEnrolledCourses: async (_, __, { prisma, userId }) => {
        if (!userId) throw new Error('Unauthorized');
  
        return prisma.enrollment.findMany({
          where: { userId },
          include: { course: true },
        });
      },
    },
  
    Mutation: {
      addCourse: async (_, args, { prisma, userId }) => {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user || user.role !== 'admin') throw new Error('Only admins can add courses');
  
        return prisma.course.create({
          data: {
            ...args,
            createdBy: { connect: { id: user.id } },
          },
        });
      },
  
      enrollInCourse: async (_, { courseId }, { prisma, userId }) => {
        if (!userId) throw new Error('Unauthorized');
  
        return prisma.enrollment.create({
          data: {
            userId,
            courseId: parseInt(courseId),
          },
        });
      },
    },
  };
  
  module.exports = { courseResolvers };
  