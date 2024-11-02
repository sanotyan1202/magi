import MessageBox from "@/components/main/message/MessageBox"
import { Message } from "@prisma/client"
import { useEffect, useRef } from "react"

type Props = {
  messages: Message[]
}

export default function MessageView({ messages }: Props) {

  // スクロールさせたい要素にrefを設定
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // メッセージが更新されるたびに一番下にスクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <div className="text-gray-600">Welcome to #general! This is the beginning of your conversation.</div>
      {messages.map(message => (
        <MessageBox key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef}> </div>
    </div>
  )
}