import { Message } from "@prisma/client"

type Props = {
  message: Message
}

export default function MessageBox({ message }: Props) {
  return (
    <div key={message.id} className="mt-4">
      <div className="p-3 mb-2 bg-white rounded-lg shadow">
        <div className="font-bold">{message.name}</div>
        <div className="text-sm text-gray-600">{message.content}</div>
      </div>
    </div>
  )
}