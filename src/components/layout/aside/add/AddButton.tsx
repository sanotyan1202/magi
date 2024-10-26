"use client"

import SectionModal from "@/components/layout/aside/add/SectionModal"
import ChannelModal from "@/components/layout/aside/add/ChannelModal"
import { useState } from "react"
import { ActionType, SectionWithChannels } from "@/types/types"
import AddMenu from "./AddMenu"

type Props = {
  sectionsState: SectionWithChannels[],
  setSectionsState: React.Dispatch<React.SetStateAction<SectionWithChannels[]>>
}

export default function AddButton(
  { sectionsState, setSectionsState }: Props
) {
  const [showAddMenu, setShowAddMenu] = useState(false);

  const handleMouseOver = () => setShowAddMenu(true)
  const handleMouseOut = () => setShowAddMenu(false)

  const [actionType, setActionType] = useState<ActionType>(null);

  return (
    <div className="relative text-gray-800">
      <button
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
        <SectionModal
          sectionsState={sectionsState}
          setSectionsState={setSectionsState}
          setActionType={setActionType}
        />
      }
      {actionType === "channel" &&
        <ChannelModal
          setSectionsState={setSectionsState}
          setActionType={setActionType}
          sectionsState={sectionsState}
        />
      }
    </div>
  )
}