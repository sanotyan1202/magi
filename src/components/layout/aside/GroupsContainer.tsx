import Groups from "@/components/layout/aside/Groups"
import { Group } from "@/types/types"

export default function GroupsContainer() {
  const groups : Group[] = [
    {
      id: 1,
      name: "Group 1",
      channels: [
        { id: 1, title: "Channel 1", url: "/channel1", groupId: "1", messages: [] },
        { id: 2, title: "Channel 2", url: "/channel2", groupId: "1", messages: [] },
      ],
    },
    {
      id: 2,
      name: "Group 2",
      channels: [
        { id: 3, title: "Channel 3", url: "/channel3", groupId: "2", messages: [] },
        { id: 4, title: "Channel 4", url: "/channel4", groupId: "2", messages: [] },
      ],
    }
  ]

  return (
    <Groups groups={groups} />
  )
}