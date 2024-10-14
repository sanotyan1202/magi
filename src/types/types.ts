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
}

export type Message = {
  id: number,
  content: string,
  userId: number,
  user: User,
}

export type User = {
  id: number,
  name: string,
}