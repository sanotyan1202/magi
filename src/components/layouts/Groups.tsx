"use client"

import Channels from "@/components/layouts/Channels"
import { Group } from "@/types/types"

export default function Groups({ groups }: { groups: Group[] }) {
  
  const toggleGroup = (event: React.MouseEvent<HTMLInputElement>) => {
    const channles = event.currentTarget.nextSibling as HTMLElement | null
    if (channles) {
      channles.classList.toggle('hidden')
    }
  }
  
  return (
    <>
      {groups.map((group) => (
        <div key={group.id}>
          <div className="mb-2 font-semibold cursor-pointer" onClick={toggleGroup}>{group.name}</div>
          <Channels channles={group.channels} />
        </div>
      ))}
    </>
  )
}