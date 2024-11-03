"use client"

import SectionFormModal from "@/components/aside/SectionFormModal"
import ChannelFormModal from "@/components/aside/ChannelFormModal"
import { useState } from "react"
import { SectionWithChannels, SetState } from "@/types/types"
import AddMenu from "@/components/aside/AddMenu"

type Props = {
  sections: SectionWithChannels[],
  setSections: SetState<SectionWithChannels[]>,
}

export default ({
  sections,
  setSections,
}: Props) => {
  
  const [showAddMenu, setShowAddMenu] = useState(false)

  const handleMouseOver = () => setShowAddMenu(true)
  const handleMouseOut = () => setShowAddMenu(false)

  const [showSectionFormModal, setShowSectionFormModal] = useState(false)
  const [showChannelFormModal, setShowChannelFormModal] = useState(false)

  return (
    <div className="relative text-gray-800">
      <button
        className="text-white"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        +
      </button>
      {showAddMenu && (
        <AddMenu
          handleMouseOut={handleMouseOut}
          handleMouseOver={handleMouseOver}
          setShowSectionFormModal={setShowSectionFormModal}
          setShowChannelFormModal={setShowChannelFormModal}
        />
      )}
      {showSectionFormModal &&
        <SectionFormModal
          setSections={setSections}
          setShowSectionFormModal={setShowSectionFormModal}
        />
      }
      {showChannelFormModal &&
        <ChannelFormModal
          setSections={setSections}
          setShowChannelFormModal={setShowChannelFormModal}
          sections={sections}
        />
      }
    </div>
  )
}