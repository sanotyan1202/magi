"use client"

import SectionFormModal from "@/components/aside/SectionFormModal"
import ChannelFormModal from "@/components/aside/ChannelFormModal"
import { useState } from "react"
import { ActionType, SectionWithChannels, SetState } from "@/types/types"
import AddMenu from "./AddMenu"

type Props = {
  sections: SectionWithChannels[],
  setSections: SetState<SectionWithChannels[]>,
}

export default function AddButton(
  { sections, setSections }: Props
) {
  const [showAddMenu, setShowAddMenu] = useState(false);

  const handleMouseOver = () => setShowAddMenu(true)
  const handleMouseOut = () => setShowAddMenu(false)

  const [actionType, setActionType] = useState<ActionType>(null);

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
          setActionType={setActionType}
        />
      )}
      {actionType === "section" &&
        <SectionFormModal
          setSections={setSections}
          setActionType={setActionType}
        />
      }
      {actionType === "channel" &&
        <ChannelFormModal
          setSections={setSections}
          setActionType={setActionType}
          sections={sections}
        />
      }
    </div>
  )
}