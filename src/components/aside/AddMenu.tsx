"use client"

import { ActionType, SetState } from "@/types/types"

type Props = {
  handleMouseOver: () => void,
  handleMouseOut: () => void,
  setShowSectionFormModal: SetState<boolean>,
  setShowChannelFormModal: SetState<boolean>,
}

export default ({
  handleMouseOver,
  handleMouseOut,
  setShowSectionFormModal,
  setShowChannelFormModal,
}: Props) => {

  return (
    <div
      className="absolute top-1 left-1
      py-2 bg-white shadow-lg 
      rounded-lg w-52 text-gray-700"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ul>
        <li
          className="cursor-pointer p-2 hover:bg-slate-200 text-center"
          onClick={() => setShowSectionFormModal(true)}
        >セクションを作成する</li>
        <li
          className="cursor-pointer p-2 hover:bg-slate-200 text-center"
          onClick={() => setShowChannelFormModal(true)}
        >チャンネルを作成する</li>
      </ul>
    </div>
  )
}