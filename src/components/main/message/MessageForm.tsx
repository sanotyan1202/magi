"use client"

import { useEffect, useState } from "react"
import { SetState } from "@/types/types"
import { Message, Member } from "@prisma/client"
import { createMessage } from "@/actions/messageActions"
import AutoResizeTextArea from "@/components/common/AutoResizeTextArea"
import { sendMessageToGPT, sendConversationToGPT } from "@/utils/gptFunctions"

type Props = {
  members: Member[],
  setMessages: SetState<Message[]>,
  channelId: number,
}

export default ({
  members,
  setMessages,
  channelId
}: Props) => {

  const [message, setMessage] = useState('')
  const [conversations, setConversations] = useState<string[]>([])
  const [isConversation, setIsConversation] = useState(false)
  const [inConversation, setInConversation] = useState(false)

  // メッセージ送信
  const sendMessage = async () => {
    // メッセージをクリア
    setMessage('')

    // 空文字の場合は送信しない
    if (message.trim() === '') return

    // 送信メッセージ登録
    const sendMessage = await createMessage(message, 'You', channelId)

    // 送信メッセージを画面に反映
    setMessages(prev => [...prev, sendMessage])

    // メンバーそれぞれにメッセージを送信
    const responses = await sendMessageToGPT(members, message)

    // 返信の数だけ繰り返す
    for (const resp of responses) {

      // 返信メッセージを登録
      const gptMessage =
      await createMessage(resp.content, resp.role, channelId)
    
      // 返信メッセージを画面に反映
      setMessages(prev => [...prev, gptMessage])
    }
  }

  useEffect(() => {
    const autoConversation = async () => {
      // 会議内容から一つ取り出す
      const conversation = conversations.shift()

      // 存在しない場合は終了
      if (!conversation || !inConversation) return
  
      // メンバーそれぞれにメッセージを送信
      const responses = await sendConversationToGPT(members, message, conversation)
  
      // 返信の数だけ繰り返す
      for (const resp of responses) {
  
        // 返信メッセージを登録
        const gptMessage =
          await createMessage(resp.content, resp.role, channelId)
    
        // 返信メッセージを画面に反映
        setMessages(prev => [...prev, gptMessage])
  
        // 返信メッセージを会議内容に追加
        setConversations(prev => [...prev, resp.content])
      }
    }
    setInterval(() => autoConversation(), 3000)
  }, [conversations])


  // 自動AI会議開始
  const startConversation = async () => {

    setInConversation(true)

    // GPTに会議をするように送信
    const responses = await sendConversationToGPT(members, message)

    // 返信の数だけ繰り返す
    for (const resp of responses) {

      // 返信メッセージを登録
      const gptMessage =
      await createMessage(resp.content, resp.role, channelId)
    
      // 返信メッセージを画面に反映
      setMessages(prev => [...prev, gptMessage])

      // 会議のスタート
      setConversations(prev => [...prev, resp.content])
    }
  }

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex">
      <AutoResizeTextArea
        value={message}
        setValue={setMessage}
        suggestions={members.map(m => `@${m.role}`)}
        placeholder="Type a message"
      />
      {!isConversation && (
        <>
          <button
            onClick={sendMessage}
            className="ml-4 p-2 w-28 border border-gray-300 rounded-l-lg">
            <p>Send</p>
            <p className="text-xs text-gray-400">(Ctrl+Enter)</p>
          </button>
          <button
            onClick={() => setIsConversation(true)}
            className="border-l-0 border border-gray-300 rounded-r-lg text-gray-600 p-1 text-sm"
          >
            ▶︎
          </button>
        </>
      )}
      {isConversation && (
        <>
          {!inConversation && (
            <button
              onClick={startConversation}
              className="ml-4 p-2 w-28 bg-indigo-700 text-white border border-gray-100 rounded-l-lg"
            >
              <p>Start</p>
              <p className="text-xs text-gray-100">(Ctrl+Enter)</p>
            </button>
          )}
          {inConversation && (
            <button
              onClick={() => setInConversation(false)}
              className="ml-4 p-2 w-28 bg-indigo-700 text-white border border-gray-100 rounded-l-lg">
              <p>Stop</p>
              <p className="text-xs text-gray-100">(Ctrl+Enter)</p>
            </button>
          )}
          <button
            onClick={() => {
              setIsConversation(false)
              setInConversation(false)
            }}
            className="border-l-0 border border-gray-100 rounded-r-lg text-white bg-indigo-700 p-1 text-sm"
          >
            ▼
          </button>
        </>
      )}
    </div>
  )
}