import ChannelViewContainer from "@/components/main/ChannelViewContainer";

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