import Messages from "@/components/chat/Messages" 
import { Message } from "@/types/types"

export default function MessagesContainer() {
  const messages: Message[] = [
    { id: 1, content: "Message 1", user: { id: 1, name: "User 1" }, userId: 1 },
    { id: 2, content: "Message 2", user: { id: 2, name: "User 2" }, userId: 2 },
  ]

  return (
    <Messages messages={messages} />
  )
}