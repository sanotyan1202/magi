import {signIn} from "@/auth"

export default function UserIcon() {

  const onSubmit = async () => {
    "use server"
    await signIn("google")
  }

  return (
    <form action={onSubmit}>
      <button type="submit">SignIn</button>
    </form>
  )
}
