import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from '@utils/database';


const handler = NextAuth({
  privders: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({session}){

  },
  async singIn({profile}){
    try {
        await connectToDb()

    } catch (error) {
        console.log(error)
    }
  }

});

export {handler as GET, handler as POST}