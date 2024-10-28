"use server"

import { PrismaClient } from '@prisma/client'
import { auth } from "@/auth"

const prisma = new PrismaClient()

export async function toggleSection(sectionId: number, isOpen: boolean) {
  return await prisma.section.update({
    where: { id: sectionId },
    data: { isOpen: !isOpen },
  })
}

export async function createSection(name: string) {

  const session = await auth()

  return await prisma.section.create({
    data: {
      name: name,
      isOpen: true,
      userId: session.user.id,
    }
  })
}