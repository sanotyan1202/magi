import { useState } from "react"
import { createSection } from "@/actions/sectionActions"
import { ActionType, SectionWithChannels, SetState } from "@/types/types"
import Modal from "@/components/common/Modal"

type Props = {
  setActionType: SetState<ActionType>,
  setSections: SetState<SectionWithChannels[]>
}

export default function SectionFormModal(
  { setActionType, setSections }: Props
) {

  const [name, setName] = useState("")

  const handleSubmit = async () => {
    // セクションの作成
    const section = await createSection(name)
    
    // ステートに反映
    setSections(prev => [...prev, { ...section, channels: [] }])

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