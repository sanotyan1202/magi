import { SectionWithChannels } from '@/types/types'

type Action =
  { type: "GET_SECTIONS", payload: SectionWithChannels[] } |
  { type: "ADD_SECTION", payload: SectionWithChannels[] } |
  { type: "REMOVE_SECTION", payload: { id: number } }

export const sectionReducer = (
  sections: SectionWithChannels[], action: Action
) => {
  switch (action.type) {
    case 'GET_SECTIONS':
      return action.payload
    case 'ADD_SECTION':
      return [sections, action.payload]
    case 'REMOVE_SECTION':
      return sections.filter(section => section.id !== action.payload.id)
    default:
      return sections
  }
}