import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 🔹 এখানে তুমি আসল DB চেক করতে পারো (MongoDB/MySQL ইত্যাদি)
        // এখন আমরা ডেমো ইউজার ব্যবহার করবো
        const user = { id: "1", name: "Test User", email: "test@example.com", password: "123456" }
        if (
          credentials.email === user.email &&
          credentials.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // কাস্টম লগইন পেজ
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
