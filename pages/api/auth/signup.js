import bcrypt from 'bcrypt';
import prisma from '../../../prisma/prismaClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password, phone } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          phone,
        },
      });

      // Exclude password field from the response
      const { password: _, ...user } = newUser;

      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();

      res.status(200).json(users);
    } catch (error) {
      console.error('Error retrieving user information:', error);
      res.status(500).json({ error: 'Failed to retrieve user information' });
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
