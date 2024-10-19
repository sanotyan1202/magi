import { auth } from "@/auth"
import SignOut from "@/components/layouts/SignOut"
import SignIn from "@/components/layouts/SignIn"

export default async function Auth() {

  const session = await auth()
  return session?.user ? <SignOut /> : <SignIn />
}