import Groups from "@/components/layout/aside/Groups"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/auth"

const prisma = new PrismaClient()

export default async function GroupsContainer() {

  const session = await auth()

  const groups = await prisma.group.findMany({
    where: { userId: session.user.id},
    include: { channels: true }
  })

  if (groups.length === 0) {
    const group = await prisma.group.create({
      data: {
        name: '未分類',
        userId: session.user.id,
        channels: {
          create: {
            title: 'general',
            url: '/channels/1',
          }
        }
      },
      include: { channels: true },
    })

    groups.push(group)
  }

  return (
    <Groups groups={groups} />
  )
}