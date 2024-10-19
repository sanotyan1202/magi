import { signOut, auth } from "@/auth"
import Image from "next/image"

export default async function SignIn() {

  const session = await auth()

  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
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