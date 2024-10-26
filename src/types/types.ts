import { Section } from "@prisma/client"
import { Channel } from "@prisma/client"

export type SectionWithChannels = Section & { channels: Channel[] }

type GptRole = "user" | "system" | "assistant"
export type GptMessage = {
  role: GptRole,
  content: string,
}

export type ActionType = "section" | "channel" | null

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>