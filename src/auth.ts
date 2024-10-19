import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async session({ session, token }) {
      // セッションにユーザーIDを追加
      session.user.id = token.sub
      return session
    },
  },
})