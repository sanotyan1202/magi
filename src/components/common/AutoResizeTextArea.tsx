"use client"

import { SetState } from "@/types/types"

type Props = {
  message: string,
  setMessage: SetState<string>,
}

export default function AutoResizeTextArea({message, setMessage}: Props) {

  const autoResizeTextArea =
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = e.target
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight + 4}px`
    }

  return (
    <textarea
    onChange={(e) => setMessage(e.target.value)}
    onInput={autoResizeTextArea}
    value={message}
    placeholder="Type a message..."
      className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none resize-none overflow-hidden"></textarea>
  )
}