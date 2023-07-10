import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from '@utils/database';
import User from '@models/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.find({
      email: session.user.email,
    });

    sessionUser.user.id = sessionUser._id.toString();
    return session;
  },
  async singIn({ profile }) {
    try {
      await connectToDb();
      const userExists = await User.find({
        email: profile.email,
      });

      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
});

export {handler as GET, handler as POST}