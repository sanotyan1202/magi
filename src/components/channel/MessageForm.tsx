"use client"

import { sendGPT } from "@/actions/gpt"
import { useState } from "react"
import { GptMessage, SetState } from "@/types/types"
import { Message } from "@prisma/client"
import { createMessage } from "@/actions/messageAction"

type Props = {
  setMessagesState: SetState<Message[]>,
  channelId: number
}

export default function MessageForm({ setMessagesState, channelId }: Props) {

  const [message, setMessage] = useState('')

  const sendMessage = async () => {

    // 空文字の場合は送信しない
    if (message.trim() === '') return

    // 送信メッセージ登録
    const sendMessage = await createMessage(message, 'You', channelId)

    // ローカルの状態を更新
    setMessagesState(
      (prevMessages: Message[]) => [...prevMessages, sendMessage]
    )

    // GPTにメッセージ送信
    const messages: GptMessage[] = [
      { role: "system", content: "you are helpful assistant" },
      { role: "user", content: message },
    ]
    const response = await sendGPT(messages)

    // メッセージをクリア
    setMessage('');

    // 返信がない場合は処理を終了
    if (!response.content) return 

    // GPTの返答を登録
    const gptMessage =
      await createMessage(response.content, 'Assistant', channelId)

    // ローカルの状態を更新
    setMessagesState(
      (prevMessages: Message[]) => [...prevMessages, gptMessage]
    )
  }

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Type a message..."
        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none" />
      <button
        onClick={sendMessage}
        className="ml-4 p-2 border border-gray-300 rounded-lg">
        Send
      </button>
    </div>
  )
}