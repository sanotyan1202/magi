"use client"

import Channels from "@/components/layout/aside/Channels"
import { SectionWithChannels } from "@/types/types"
import { toggleSection } from "@/actions/toggleSection"
import { useState } from "react"

export default function Sections(
  { sections }: { sections: SectionWithChannels[] }
) {

  const [sectionState, setSectionState] = useState(sections);

  const handleToggle = async (sectionId: number, isOpen: boolean) => {
    // グループの開閉をDBに登録
    await toggleSection(sectionId, isOpen);

    // ローカルの状態を更新
    setSectionState(prevSections =>
      prevSections.map(section =>
        section.id === sectionId ? { ...section, isOpen: !isOpen } : section
      )
    )
  }
  
  return (
    <>
      {sectionState.map((section) => (
        <div key={section.id}>
          <div
            className="mb-2 font-semibold cursor-pointer"
            onClick={() => { handleToggle(section.id, section.isOpen) }}
          >
            {section.name}
          </div>
          { section.isOpen && <Channels channles={section.channels} /> }
        </div>
      ))}
    </>
  )
}