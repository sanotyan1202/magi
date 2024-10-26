import ChannelViewContainer from "@/components/channel/ChannelViewContainer";

type Props = {
  params: {
    id: string
  }
}

export default function page({ params }: Props) {
  return (
    <ChannelViewContainer channelId={Number(params.id)} />
  )
}