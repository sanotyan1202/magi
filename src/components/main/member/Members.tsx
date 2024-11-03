import { useState } from 'react'
import { Member, Message } from '@/prisma-types'
import { SetState } from '@/types/types'
import MemberFormModal from '@/components/main/member/MemberFormModal'


type Props = {
  channelId: number,
  members: Member[],
  setMessages: SetState<Message[]>,
}

export default ({
  channelId,
  members,
  setMessages
}: Props) => {

  const [membersState, setMembersState] = useState<Member[]>(members)
  const [showModal, setShowModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const handleClick = (selectedMember: Member | null) => {
    setSelectedMember(selectedMember)
    setShowModal(true)
  }

  return (
    <div className="flex">
      <span
        className="text-sm text-gray-500 p-1 cursor-pointer hover:text-blue-700"
        onClick={() => handleClick(null)}
      >
        + add member
      </span>
      {membersState.map(member => (
        <span
          key={member.id}
          className="text-sm text-gray-500 p-1 cursor-pointer hover:text-blue-700"
          onClick={() => handleClick(member)}
        >@{member.role}</span>
      ))}
      {showModal && (
        <MemberFormModal
          channelId={channelId}
          member={selectedMember}
          setShowModal={setShowModal}
          setMembers={setMembersState}
          setMessages={setMessages}
        />
      )}
    </div>
  )
}