import { useState } from "react"
import { SectionWithChannels } from "@/types/types"
import { ActionType, SetState } from "@/types/types"
import { createChannel } from "@/actions/channelActions"
import Moddal from "@/components/common/Modal"

type Props = {
  sectionsState: SectionWithChannels[],
  setActionType: SetState<ActionType>,
  setSectionsState: SetState<SectionWithChannels[]>,
}

export default function ChannelFormModal(
  { sectionsState, setActionType, setSectionsState }: Props
) {

  const [selectedSectionId, setSelectedSectionId] =
    useState<number>(sectionsState[0].id)
    
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async () => {

    // チャンネルの作成
    const channel = await createChannel(title, selectedSectionId)

    // ローカルの状態を更新
    const sections = sectionsState.map(section => {
      return section.id === selectedSectionId ?
        { ...section, channels: [...section.channels, channel] } : section
    })

    // ステートに反映
    setSectionsState(sections)

    // モーダルを閉じる
    setActionType(null)
  }

  return (
    <Moddal>
      <h2 className="mb-4">チャンネルを作成</h2>
        <select
          className="border p-2 w-full mb-4"
          value={selectedSectionId}
          onChange={(e) => setSelectedSectionId(Number(e.target.value))}
        >
        {sectionsState.map((section) => (
            <option key={section.id} value={section.id}>
              {section.name}
            </option>))
        }
        </select>
      <input
        type="text"
        placeholder="名前を入力"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />        
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        作成する
      </button>
    </Moddal>
  )
}