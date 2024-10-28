import { useState } from 'react'
import { Member } from '@/prisma-types'
import MemberFormModal from '@/components/channel/member/MemberFormModal'


type Props = {
  channelId: number,
  members: Member[],
}

export default function Members({ channelId, members }: Props) {

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
          setMembersState={setMembersState}
        />
      )}
    </div>
  )
}