"use client"

import Sections from "@/components/aside/Sections"
import AddButton from "@/components/aside/AddButton"
import { SectionWithChannels } from "@/types/types"
import { useState } from "react"

type Props = {
  sections: SectionWithChannels[]
}

export default ({
  sections,
}: Props) => {

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