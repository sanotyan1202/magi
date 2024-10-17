"use client"

import { sendGPT } from "@/actions/gpt"
import { useState } from "react"
import { GptMessage } from "@/types/types"

export default function MessageForm() {

  const [message, setMessage] = useState('')

  const sendMessage = async () => {
    if (message.trim() === '') return

    const messages: GptMessage[] = [
      { role: "system", content: "you are helpful assistant" },
      { role: "user", content: message },
    ]

    const response = await sendGPT(messages)
    console.log(response) 
    setMessage('');
  }

  return (
    <div className="p-4 bg-white border-t border-gray-300 flex">
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Type a message..."
        className="w-full p-2 border border-gray-300 rounded-lg" />
      <button
        onClick={sendMessage}
        className="ml-4 p-4 border border-gray-300 rounded-lg">
        Send
      </button>
    </div>
  )
}