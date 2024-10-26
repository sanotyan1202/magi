import { useState } from "react"
import { createSection } from "@/actions/sectionAction"
import { ActionType } from "@/types/types"
import { SectionWithChannels } from "@/types/types"

type Props = {
  sectionsState: SectionWithChannels[],
  setActionType: React.Dispatch<React.SetStateAction<ActionType>>,
  setSectionsState: React.Dispatch<React.SetStateAction<SectionWithChannels[]>>
}

export default function SectionModal(
  { sectionsState, setActionType, setSectionsState }: Props
) {

  const [name, setName] = useState("")

  const handleSubmit = async () => {
    // セクションの作成
    const section = await createSection(name)

    // ローカルの状態を更新
    const sections = [
      ...sectionsState,
      { ...section, channels: [] }
    ]
    
    // ステートに反映
    setSectionsState(sections)

    // モーダルを閉じる
    setActionType(null)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="mb-4">セクションの作成</h2>
        <input
          type="text"
          placeholder="名前を入力"
          value={name}
          onChange={(e) => setName(e.target.value)}
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