"use client"

import { sendGPT } from "@/actions/gpt"
import { useState } from "react"

export default function MessageForm() {

  const [message, setMessage] = useState('')

  const sendMessage = async () => {
    if (message.trim() === '') return
    const response = await sendGPT(message)
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