import {signIn} from "@/auth"

export default function UserIcon() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">SignIn</button>
    </form>
  )
}
