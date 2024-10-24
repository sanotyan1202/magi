import { useState } from "react"
import { SectionWithChannels } from "@/types/types"
import { ActionType } from "@/types/types"
import { createChannel } from "@/actions/channelAction"

type ChannelModalProps = {
  sectionsState: SectionWithChannels[],
  setActionType: (actionType: ActionType) => void,
  setSectionsState: (sections: SectionWithChannels[]) => void
}

export default function ChannelModal(
  { sectionsState, setActionType, setSectionsState }: ChannelModalProps
) {

  const [selectedSectionId, setSelectedSectionId] =
    useState<string>(sectionsState[0].id.toString())
    
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async () => {

    // チャンネルの作成
    const channel = await createChannel(title, Number(selectedSectionId))

    // ローカルの状態を更新
    const sections = sectionsState.map(section => {
      return section.id === Number(selectedSectionId) ?
        { ...section, channels: [...section.channels, channel] } : section
    })

    // ステートに反映
    setSectionsState(sections)

    // モーダルを閉じる
    setActionType(null)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="mb-4">チャンネルを作成</h2>
          <select
            className="border p-2 w-full mb-4"
            value={selectedSectionId}
            onChange={(e) => setSelectedSectionId(e.target.value)}
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
      </div>
    </div>
  )
}