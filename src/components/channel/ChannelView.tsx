"use client"

import MessageView from "@/components/channel/MessageView"
import MessageForm from "@/components/channel/MessageForm"
import { Message } from "@prisma/client"
import { useState } from "react"

type Props = {
  messages: Message[],
  channelId: number,
}

export default function ChannelView({ messages, channelId }: Props) {

  const [messagesState, setMessagesState] = useState(messages)

  return (
    <>
      <div className="flex flex-col flex-grow">
        <MessageView messages={messagesState} />
        <MessageForm
          setMessagesState={setMessagesState}
          channelId={channelId}
        />
      </div>
    </>
  )
}