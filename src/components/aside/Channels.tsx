import Link from "next/link"
import { Channel } from "@/prisma-types"

type Props = {
  channles: Channel[]
}

export default ({
  channles,
}: Props) => {
  return (
    <ul>
      {channles.map((channel) => (
        <li key={channel.id}>
          <span className="mr-2 w-2">#</span>
          <Link href={`/chat/${channel.id}`}>{channel.title}</Link>
        </li>
      ))}
    </ul>
  )
}