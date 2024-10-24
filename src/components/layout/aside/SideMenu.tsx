"use client"

import Sections from "@/components/layout/aside/Sections"
import PlusButton from "@/components/layout/aside/add/AddButton"
import { SectionWithChannels } from "@/types/types"
import { useState } from "react"

type SideMenuProps = {
  sections: SectionWithChannels[]
}

export default function SideMenu(
  { sections }: SideMenuProps
) {

  const [sectionsState, setSectionsState] = useState(sections)

  return (
    <div className="flex justify-between">
      <Sections
        sectionsState={sectionsState}
        setSectionsState={setSectionsState}
      />
      <PlusButton
        sectionsState={sectionsState}
        setSectionsState={setSectionsState}        
      />
    </div>
  )
}