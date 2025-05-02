const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secret'; // JWT secret for your backend

const authResolvers = {
  Mutation: {
    // Register user with uid and username
    register: async (_, { uid, username }, { prisma }) => {
      // Check if a user with the given UID already exists
      const existingUser = await prisma.users.findUnique({ where: { uid } });
      if (existingUser) throw new Error('User already exists'); // Prevent duplicate UID

      // Create a new user in the database
      const newUser = await prisma.users.create({
        data: {   uid: uid,
          name: username, // use 'name' instead of 'username'
          role: 'learner',}, // Store UID and Username only
      });

      // Generate JWT token for the new user
      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);

      // Return the user object excluding password_hash and the token
      const { password_hash, ...userWithoutPassword } = newUser;
      return { token, user: userWithoutPassword };
    },

    // Login user with uid
    login: async (_, { uid }, { prisma }) => {
      // Find user by UID
      const user = await prisma.users.findUnique({ where: { uid } });
      if (!user) throw new Error('User not found'); // If user doesn't exist, throw error

      // Generate JWT token for the existing user
      const token = jwt.sign({ userId: user.id }, JWT_SECRET);

      // Return the user object excluding password_hash and the token
      const { password_hash, ...userWithoutPassword } = user;
      return { token, user: userWithoutPassword };
    },
  },
};

module.exports = { authResolvers };
