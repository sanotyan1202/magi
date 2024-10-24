import { Section } from "@prisma/client"
import { Channel } from "@prisma/client"

export type SectionWithChannels = Section & { channels: Channel[] }

export type GptMessage = {
  role: GptRole,
  content: string,
}

type GptRole = "user" | "system" | "assistant"

export type ActionType = "section" | "channel" | null