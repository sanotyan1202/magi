import { Group } from "@prisma/client"
import { Channel } from "@prisma/client"

export type GroupWithChannels = Group & { channels: Channel[] }

export type GptMessage = {
  role: GptRole,
  content: string,
}

type GptRole = "user" | "system" | "assistant"