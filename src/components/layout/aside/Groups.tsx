"use client"

import Channels from "@/components/layout/aside/Channels"
import { GroupWithChannels } from "@/types/types"
import { toggleGroup } from "@/actions/toggleGroup"
import { useState } from "react"

export default function Groups(
  { groups }: { groups: GroupWithChannels[] }
) {

  const [groupState, setGroupState] = useState(groups);

  const handleToggle = async (groupId: number, isOpen: boolean) => {
    // グループの開閉をDBに登録
    await toggleGroup(groupId, isOpen);

    // ローカルの状態を更新
    setGroupState(prevGroups =>
      prevGroups.map(group =>
        group.id === groupId ? { ...group, isOpen: !isOpen } : group
      )
    )
  }
  
  return (
    <>
      {groupState.map((group) => (
        <div key={group.id}>
          <div
            className="mb-2 font-semibold cursor-pointer"
            onClick={() => { handleToggle(group.id, group.isOpen) }}
          >
            {group.name}
          </div>
          { group.isOpen && <Channels channles={group.channels} /> }
        </div>
      ))}
    </>
  )
}