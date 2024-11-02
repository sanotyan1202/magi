import { useState } from 'react'
import { Member, Message } from '@/prisma-types'
import { SetState } from '@/types/types'
import MemberFormModal from '@/components/main/member/MemberFormModal'


type Props = {
  channelId: number,
  members: Member[],
  setMessages: SetState<Message[]>
}

export default function Members(
  { channelId, members, setMessages }: Props
) {

  const [membersState, setMembersState] = useState<Member[]>(members)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex">
      <span
        className="text-sm text-gray-500 p-1 cursor-pointer hover:text-blue-700"
        onClick={() => setShowModal(true)}
      >
        + add member
      </span>
      {membersState.map(member => (
        <span key={member.id} className="text-sm text-gray-500 p-1 cursor-pointer hover:text-blue-700">@{member.role}</span>
      ))}
      {showModal && (
        <MemberFormModal
          channelId={channelId}
          setShowModal={setShowModal}
          setMembers={setMembersState}
          setMessages={setMessages}
        />
      )}
    </div>
  )
}