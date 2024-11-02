import { useState } from "react"
import { createMember, updateMember, deleteMember } from "@/actions/memberActions"
import { createMessage } from "@/actions/messageActions"
import { sendGPT } from "@/actions/gpt"
import { Member, Message } from "@/prisma-types"
import { SetState, GptMessage } from "@/types/types"
import Modal from "@/components/common/Modal"
import AutoResizeTextArea from "@/components/common/AutoResizeTextArea"

type Props = {
  channelId: number,
  member: Member | null,
  setShowModal: SetState<boolean>,
  setMembers: SetState<Member[]>
  setMessages: SetState<Message[]>
}

export default function MemberFormModal(
  { channelId, member, setShowModal, setMembers, setMessages }: Props
) {

  const [role, setRole] = useState(member?.role || "")
  const [content, setContent] = useState(member?.content || "")

  // メンバーの追加
  const handleCreate = async () => {

    // メンバーを作成
    const member = await createMember(channelId, role, content)

    // ローカルの状態を更新
    setMembers((prev) => [...prev, member])

    // GPTにメッセージ送信
    const messages: GptMessage[] = [
      { role: "system", content: `${content} あなた宛のメンション「@${role}」に返事をしてください。` },
      { role: "user", content: "こんにちは、簡単に自己紹介してください。" },
    ]
    const response = await sendGPT(messages)

    // 返信がない場合は処理を終了
    if (!response.content) return

    // メッセージを登録
    const gptMessage =
      await createMessage(response.content, role, channelId)
    
    // ローカルの状態を更新
    setMessages(prev => [...prev, gptMessage])
    
    // モーダルを閉じる
    setShowModal(false)
  }

  // メンバーの更新
  const handleUpdate = async () => {
      
    if (member == null) return

    // メンバーを更新
    await updateMember(member.id, role, content)

    // ローカルの状態を更新
    setMembers((prev) =>
      prev.map(m => m.id === member.id ? { ...m, role, content } : m)
    )

    // モーダルを閉じる
    setShowModal(false)
  }

  // メンバーの削除
  const handleDelete = async () => {
    
    if (member == null) return

    if (!confirm(`@${member.role}を削除しますか？`)) return

    // メンバーを更新
    await deleteMember(member.id)

    // ローカルの状態を更新
    setMembers((prev) => prev.filter(m => m.id !== member.id))

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
        className="border p-2 w-full mb-4 text-gray-600"
      />
      <AutoResizeTextArea
        value={content}
        setValue={setContent}
      ></AutoResizeTextArea>
      <div className="flex justify-around">
        {member == null ? (
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleCreate}
          >
            追加する
          </button>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleUpdate}
            >
              更新する
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded"
              onClick={handleDelete}
            >
              削除する
            </button>
          </>
        )}
      </div>
    </Modal>
  )
}