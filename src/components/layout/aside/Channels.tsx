import Link from "next/link"
import { Channel } from "@/types/types"

export default function Channels({ channles } : { channles: Channel[] }) {
  return (
    <ul id={channles[0].groupId}>
      {channles.map((channel) => (
        <li key={channel.id}>
          <Link href={channel.url}>{channel.title}</Link>
        </li>
      ))}
    </ul>
  )
}