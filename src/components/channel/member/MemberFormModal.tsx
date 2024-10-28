import { useState } from "react"
import { createMember } from "@/actions/memberActions"
import {Member } from "@/prisma-types"
import { SetState } from "@/types/types"
import Modal from "@/components/common/Modal"

type Props = {
  channelId: number,
  setShowModal: SetState<boolean>,
  setMembersState: SetState<Member[]>
}

export default function MemberFormModal(
  { channelId, setShowModal, setMembersState }: Props
) {

  const [role, setRole] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async () => {

    // メンバーを作成
    const member = await createMember(channelId, role, content)

    // ローカルの状態を更新
    setMembersState((prev) => [...prev, member])

    // モーダルを閉じる
    setShowModal(false)
  }

  return (
    <Modal>
      <h2 className="mb-4">メンバーの追加</h2>
      <input
        type="text"
        placeholder="名前を入力"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        placeholder="役割の詳細を入力"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-4"
      ></textarea>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        追加する
      </button>
    </Modal>
  )
}