const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const authResolvers = {
  Mutation: {
    register: async (_, { name, email, password }, { prisma }) => {
      const existing = await prisma.users.findUnique({ where: { email } });
      if (existing) throw new Error('User already exists');

      const hash = await bcrypt.hash(password, 10);
      const user = await prisma.users.create({
        data: { name, email, password_hash: hash, role: 'learner' }, // use password_hash field name
      });

      const token = jwt.sign({ userId: user.id }, JWT_SECRET);
      return { token, user };
    },

    login: async (_, { email, password }, { prisma }) => {
      const user = await prisma.users.findUnique({ where: { email } });
      if (!user) throw new Error('User not found');

      const valid = await bcrypt.compare(password, user.password_hash); // use correct DB field
      if (!valid) throw new Error('Invalid password');

      const token = jwt.sign({ userId: user.id }, JWT_SECRET);
      return { token, user };
    },
  },
};

module.exports = { authResolvers };
