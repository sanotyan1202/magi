"use client"

import { ActionType } from "@/types/types"

type Props = {
  handleMouseOver: () => void,
  handleMouseOut: () => void,
  setActionType: React.Dispatch<React.SetStateAction<ActionType>>
}

export default function AddMenu(
  { handleMouseOver, handleMouseOut, setActionType }: Props
) {
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
          onClick={() => setActionType("section")}
        >セクションを作成する</li>
        <li
          className="cursor-pointer p-2 hover:bg-slate-200 text-center"
          onClick={() => setActionType("channel")}
        >チャンネルを作成する</li>
      </ul>
    </div>
  )
}