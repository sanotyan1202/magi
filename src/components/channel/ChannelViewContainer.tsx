import ChannelView from "@/components/channel/ChannelView"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Props = {
  channelId: number,
}

export default async function ChannelViewContainer({ channelId }: Props) {
  
  // メッセージ一覧取得
  const messages = await prisma.message.findMany({
    where: { channelId: channelId },
  })

  return (
    <ChannelView messages={messages} channelId={channelId} />
  )
}