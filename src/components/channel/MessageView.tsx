import Messages from "@/components/channel/Messages"
import { Message } from "@prisma/client"

type Props = {
  messages: Message[]
}

export default function MessageView({ messages }: Props) {
  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="text-gray-600">Welcome to #general! This is the beginning of your conversation.</div>
      <Messages messages={messages} />
    </div>
  )
}