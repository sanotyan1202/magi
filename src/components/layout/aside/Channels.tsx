import Link from "next/link"
import { Channel } from "@/prisma-types"

type ChannelsProps = {
  channles: Channel[]
}

export default function Channels({ channles }: ChannelsProps) {
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