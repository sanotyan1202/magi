"use client"

import Sections from "@/components/layout/aside/Sections"
import AddButton from "@/components/layout/aside/AddButton"
import { SectionWithChannels } from "@/types/types"
import { useState } from "react"

type Props = {
  sections: SectionWithChannels[]
}

export default function SideMenu({ sections }: Props) {

  const [sectionsState, setSections] = useState(sections)

  return (
    <div className="flex justify-between">
      <Sections
        sections={sectionsState}
        setSections={setSections}
      />
      <AddButton
        sections={sections}
        setSections={setSections}
      />
    </div>
  )
}