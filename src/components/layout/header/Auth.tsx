import { auth } from "@/auth"
import SignOut from "@/components/layout/header/SignOut"
import SignIn from "@/components/layout/header/SignIn"

export default async function Auth() {

  const session = await auth()
  return session?.user ? <SignOut /> : <SignIn />
}