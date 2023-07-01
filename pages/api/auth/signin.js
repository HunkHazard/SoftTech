import bcrypt from 'bcrypt';
import prisma from '../../../prisma/prismaClient';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Generate a new token
      const token = generateToken();

      // Create a token for the user
      const newToken = await prisma.token.create({
        data: {
          token,
          userId: user.id,
        },
      });

      // Exclude password field from the response
      const { password: _, ...userData } = user;

      res.status(200).json({ token: newToken.token, user: userData });
    } catch (error) {
      console.error('Error signing in:', error);
      res.status(500).json({ error: 'Failed to sign in' });
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

// Generate a random token
const generateToken = () => {
  const token = uuidv4();
  
  return token;
};
