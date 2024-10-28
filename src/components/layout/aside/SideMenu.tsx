"use client"

import Sections from "@/components/layout/aside/Sections"
import AddButton from "@/components/layout/aside/add/AddButton"
import { SectionWithChannels } from "@/types/types"
import { useState } from "react"

type Props = {
  sections: SectionWithChannels[]
}

export default function SideMenu({ sections }: Props) {

  const [sectionsState, setSectionsState] = useState(sections)

  return (
    <div className="flex justify-between">
      <Sections
        sectionsState={sectionsState}
        setSectionsState={setSectionsState}
      />
      <AddButton
        sectionsState={sectionsState}
        setSectionsState={setSectionsState}
      />
    </div>
  )
}