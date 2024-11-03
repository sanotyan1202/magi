import ChannelView from "@/components/main/ChannelView"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Props = {
  channelId: number,
}

export default async ({
  channelId,
}: Props) => {
  
  // チャンネル取得
  const channel = await prisma.channel.findUnique({
    where: { id: channelId },
    include: {
      members: true,
      messages: true,
    },
  })

  return (
    <>
      {channel ? 
        <ChannelView channel={channel} />
      : 
        <div>Channel not found</div>
      }
    </>
  )
}