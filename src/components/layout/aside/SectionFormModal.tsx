import { useState } from "react"
import { createSection } from "@/actions/sectionActions"
import { ActionType, SectionWithChannels, SetState } from "@/types/types"
import Modal from "@/components/common/Modal"

type Props = {
  sectionsState: SectionWithChannels[],
  setActionType: SetState<ActionType>,
  setSectionsState: SetState<SectionWithChannels[]>
}

export default function SectionFormModal(
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
    <Modal>
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
    </Modal>
  )
}