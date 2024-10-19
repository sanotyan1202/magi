export type Group = {
  id: number,
  name: string,
  channels: Channel[],
}

export type Channel = {
  id: number,
  title: string,
  url: string,
  groupId: string,
  messages: Message[],
}

export type Message = {
  id: number,
  content: string,
  name: string,
  channelId: number,
}

export type GptMessage = {
  role: GptRole,
  content: string,
}

type GptRole = "user" | "system" | "assistant"