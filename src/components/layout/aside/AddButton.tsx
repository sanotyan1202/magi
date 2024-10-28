"use client"

import SectionFormModal from "@/components/layout/aside/SectionFormModal"
import ChannelFormModal from "@/components/layout/aside/ChannelFormModal"
import { useState } from "react"
import { ActionType, SectionWithChannels, SetState } from "@/types/types"
import AddMenu from "./AddMenu"

type Props = {
  sectionsState: SectionWithChannels[],
  setSectionsState: SetState<SectionWithChannels[]>,
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
          sectionsState={sectionsState}
          setSectionsState={setSectionsState}
          setActionType={setActionType}
        />
      }
      {actionType === "channel" &&
        <ChannelFormModal
          setSectionsState={setSectionsState}
          setActionType={setActionType}
          sectionsState={sectionsState}
        />
      }
    </div>
  )
}