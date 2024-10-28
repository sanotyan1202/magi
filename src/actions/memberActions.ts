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