"use client"

import Channels from "@/components/layout/aside/Channels"
import { SectionWithChannels } from "@/types/types"
import { toggleSection } from "@/actions/sectionAction"

type Props = {
  sectionsState: SectionWithChannels[],
  setSectionsState: React.Dispatch<React.SetStateAction<SectionWithChannels[]>>
}

export default function Sections(
  { sectionsState, setSectionsState }: Props
) {

  const handleToggle = async (sectionId: number, isOpen: boolean) => {

    // セクションの開閉をDBに登録
    await toggleSection(sectionId, isOpen);

    // ステートに反映
    setSectionsState(sectionsState.map(section =>
      section.id === sectionId ? { ...section, isOpen: !isOpen } : section))
  }
  
  return (
    <div className="flex flex-col">
      {sectionsState.map((section, index) => (
        <div key={section.id}>
          <div
            className={`${index === 0 ? "mt-2" : "mt-5"} mb-1 cursor-pointer flex`}
            onClick={() => { handleToggle(section.id, section.isOpen) }}
          >
            <div className="mr-2 w-3">
              {section.isOpen ? "▼" : "▶︎"}
            </div>
            {section.name}
          </div>
          {section.isOpen &&
            <div className="flex">
              <Channels channles={section.channels} />
            </div>
          }
        </div>
      ))}
    </div>
  )
}