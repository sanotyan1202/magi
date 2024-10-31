"use client"

import { sendGPT } from "@/actions/gpt"
import { useState } from "react"
import { GptMessage, SetState } from "@/types/types"
import { Message, Member } from "@prisma/client"
import { createMessage } from "@/actions/messageActions"
import AutoResizeTextArea from "@/components/common/AutoResizeTextArea"

type Props = {
  members: Member[],
  setMessages: SetState<Message[]>,
  channelId: number,
}

export default function MessageForm(
  { members, setMessages, channelId }: Props
) {

  const [message, setMessage] = useState('')

  // メッセージ送信
  const sendMessage = async () => {

    // 空文字の場合は送信しない
    if (message.trim() === '') return

    // 送信メッセージ登録
    const sendMessage = await createMessage(message, 'You', channelId)

    // ローカルの状態を更新
    setMessages(prev => [...prev, sendMessage])

    // メンションが含まれているか
    let noMension = true

    members.forEach(async member => {
      
      // メンションを含む場合
      if (message.includes(`@${member.role}`)) {

        noMension = false

        // GPTにメッセージ送信
        const messages: GptMessage[] = [
          {
            role: "system",
            content: `${member.content} あなた宛のメンション「@${member.role}」に返事をしてください。`
          },
          { role: "user", content: message },
        ]
        const response = await sendGPT(messages)

        // 返信がない場合は処理を終了
        if (response.content) {

          // GPTの返答を登録
          const gptMessage =
            await createMessage(response.content, member.role, channelId)
          
          // ローカルの状態を更新
          setMessages(prev => [...prev, gptMessage])
        }
      }      
    })

    if (noMension) {
      // GPTにメッセージ送信
      const messages: GptMessage[] = [
        {
          role: "system",
          content: 'you are helpful assistant'
        },
        { role: "user", content: message },
      ]
      const response = await sendGPT(messages)

      // 返信がない場合は処理を終了
      if (response.content) {

        // GPTの返答を登録
        const gptMessage =
          await createMessage(response.content, 'Assistant', channelId)
        
        // ローカルの状態を更新
        setMessages(prev => [...prev, gptMessage])
      }
    }      
    
    // メッセージをクリア
    setMessage('')
  }

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex">
      <AutoResizeTextArea message={message} setMessage={setMessage} suggestions={members.map(m => `@${m.role}`)} />
      <button
        onClick={sendMessage}
        className="ml-4 p-2 border border-gray-300 rounded-lg">
        <p>Send</p>
        <p className="text-xs text-gray-400">(Ctrl+Enter)</p>
      </button>
    </div>
  )
}