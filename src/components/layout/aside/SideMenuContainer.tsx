import SideMenu from "@/components/layout/aside/SideMenu"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/auth"

const prisma = new PrismaClient()

export default async function SideMenuContainer() {

  // 認証情報取得
  const session = await auth()

  // セクションを取得
  const sections = await prisma.section.findMany({
    where: { userId: session.user.id},
    include: { channels: true }
  })

  // グループがない場合はデフォルトグループを作成
  if (sections.length === 0) {
    const section = await prisma.section.create({
      data: {
        name: '未分類',
        userId: session.user.id,
        isOpen: true,
        channels: {
          create: {
            title: 'general',
          }
        }
      },
      include: { channels: true },
    })

    sections.push(section)
  }

  return (
    <SideMenu sections={sections} />
  )
}