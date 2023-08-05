import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials, req) {
        if (credentials.password === "admin") {
          const user = {
            name: "Admin",
            email: "admin@admin.com",
          };
          return user;
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      if (!session) return;

      // if session exists, then we have a user
      console.log("Session CallBack: ", session);
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
