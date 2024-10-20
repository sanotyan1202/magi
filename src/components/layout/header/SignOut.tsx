import { signOut, auth } from "@/auth"
import Image from "next/image"

export default async function SignIn() {

  const session = await auth()

  const onSubmit = async () => {
    "use server"
    await signOut()
  }
  return (
    <form action={onSubmit}>
      <Image
        src={session.user?.image ?? ""}
        alt={session.user?.name ?? ""}
        width={30}
        height={30}
        className="rounded-full"
      />
      <button type="submit">SignOut</button>
    </form>
  )
}