import { Section, Channel, Member, Message } from "@prisma/client"

export type SectionWithChannels = Section & { channels: Channel[] }

export type ChannelWithMessagesAndMembers =
  Channel & { members: Member[], messages: Message[] }

type GptRole = "user" | "system" | "assistant"

export type GptMessage = {
  role: GptRole,
  content: string,
}

export type ActionType = "section" | "channel" | null

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export type ResponseWithMember = {
  role: string,
  content: string,
}