import Link from "next/link"
import { Channel } from "@/prisma-types"

export default function Channels({ channles } : { channles: Channel[] }) {
  return (
    <ul>
      {channles.map((channel) => (
        <li key={channel.id}>
          <Link href={channel.url}>{channel.title}</Link>
        </li>
      ))}
    </ul>
  )
}