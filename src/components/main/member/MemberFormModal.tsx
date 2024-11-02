import { useState } from "react"
import { createMember } from "@/actions/memberActions"
import { createMessage } from "@/actions/messageActions"
import { sendGPT } from "@/actions/gpt"
import { Member, Message } from "@/prisma-types"
import { SetState, GptMessage } from "@/types/types"
import Modal from "@/components/common/Modal"

type Props = {
  channelId: number,
  setShowModal: SetState<boolean>,
  setMembers: SetState<Member[]>
  setMessages: SetState<Message[]>
}

export default function MemberFormModal(
  { channelId, setShowModal, setMembers, setMessages }: Props
) {

  const [role, setRole] = useState("")
  const [content, setContent] = useState("")

  // メンバーの追加
  const handleSubmit = async () => {

    // メンバーを作成
    const member = await createMember(channelId, role, content)

    // ローカルの状態を更新
    setMembers((prev) => [...prev, member])

    // GPTにメッセージ送信
    const messages: GptMessage[] = [
      { role: "system", content: `${content} あなた宛のメンション「@${ role }」に返事をしてください。` },
      { role: "user", content:  "こんにちは、簡単に自己紹介してください。" },
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