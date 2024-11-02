"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createMember(
  channelId: number, role: string, content: string,
) {

  return await prisma.member.create({
    data: {
      channelId: channelId,
      role: role,
      content: content,
    },
  })
}

export async function updateMember(
  id: number, role: string, content: string,
) {

  return await prisma.member.update({
    where: { id: id },
    data: { role: role, content: content },
  })
}

export async function deleteMember(id: number) {

  return await prisma.member.delete({
    where: { id: id },
  })
}