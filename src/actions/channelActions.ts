"use server"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createChannel(title: string, sectionId: number) {
  return await prisma.channel.create({
    data: {
      title: title,
      sectionId: sectionId, 
    }
  })
}