import {signIn} from "@/auth"

export default () => {

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
