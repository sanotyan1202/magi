"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function createMessage(
  message: string, name: string, channelId: number
) {

  return await prisma.message.create({
    data: {
      content: message,
      name: name,
      channelId: channelId,
    },
  })
}