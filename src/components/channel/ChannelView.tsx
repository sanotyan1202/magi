"use client"

import MessageView from "@/components/channel/MessageView"
import MessageForm from "@/components/channel/MessageForm"
import { useState } from "react"
import { ChannelWithMessagesAndMembers } from "@/types/types"

type Props = {
  channel: ChannelWithMessagesAndMembers,
}

export default function ChannelView({ channel }: Props) {

  const [messagesState, setMessagesState] = useState(channel.messages)

  return (
    <>
      <div className="flex flex-col flex-grow bg-gray-100">
        <div className="text-xl font-bold pl-4 py-3 h-16 fixed top-16 left-64 w-full z-50 bg-gray-100">
          # {channel.title}
        </div>
        <div className="my-16">
          <MessageView messages={messagesState} />
        </div>
        <div className="fixed left-64 right-0 bottom-0 z-50 h-fit">
          <MessageForm
            setMessagesState={setMessagesState}
            channelId={channel.id}
          />
        </div> 
      </div>
    </>
  )
}