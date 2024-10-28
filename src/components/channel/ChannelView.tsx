"use client"

import MessageView from "@/components/channel/message/MessageView"
import MessageForm from "@/components/channel/message/MessageForm"
import { useState } from "react"
import { ChannelWithMessagesAndMembers } from "@/types/types"
import Members from "@/components/channel/member/Members"

type Props = {
  channel: ChannelWithMessagesAndMembers,
}

export default function ChannelView({ channel }: Props) {

  const [messagesState, setMessagesState] = useState(channel.messages)

  return (
    <>
      <div className="flex flex-col flex-grow bg-gray-100">
        <div className="pl-4 py-3 h-16 fixed top-16 left-64 w-full bg-gray-100 flex flex-col">
          <span className="text-xl font-bold"># {channel.title}</span>
          <Members
            channelId={channel.id}
            members={channel.members}
          />
        </div>
        <div className="mt-16 mb-20">
          <MessageView messages={messagesState} />
        </div>
        <div className="fixed left-64 right-0 bottom-0 h-fit">
          <MessageForm
            channelId={channel.id}
            setMessagesState={setMessagesState}
          />
        </div> 
      </div>
    </>
  )
}