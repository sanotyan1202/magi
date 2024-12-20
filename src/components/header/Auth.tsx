import { auth } from "@/auth"
import SignOut from "@/components/header/SignOut"
import SignIn from "@/components/header/SignIn"

export default async () => {

  const session = await auth()
  return session?.user ? <SignOut /> : <SignIn />
}