import { Message } from "@prisma/client"

type MessagesProps = {
  messages: Message[]
}

export default function Messages({ messages }: MessagesProps) {
  return (
    <>
      {messages.map((message) => (
        <div key={message.id} className="mt-4">
          <div className="p-3 mb-2 bg-white rounded-lg shadow">
            <div className="font-bold">{message.name}</div>
            <div className="text-sm text-gray-600">{message.content}</div>
          </div>
        </div>
      ))}
    </>
  )
}