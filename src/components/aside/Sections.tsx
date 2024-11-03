"use client"

import Channels from "@/components/aside/Channels"
import { SectionWithChannels, SetState } from "@/types/types"
import { toggleSection } from "@/actions/sectionActions"

type Props = {
  sections: SectionWithChannels[],
  setSections: SetState<SectionWithChannels[]>,
}

export default ({
  sections,
  setSections,
}: Props) => {

  // セクションの開閉を切り替え
  const handleToggle = async (sectionId: number, isOpen: boolean) => {

    // セクションの開閉をDBに登録
    await toggleSection(sectionId, isOpen);

    // ステートに反映
    setSections(prev => prev.map(section =>
      section.id === sectionId ? { ...section, isOpen: !isOpen } : section))
  }
  
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
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