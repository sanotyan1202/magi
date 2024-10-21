"use server"

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Server Actionとしてトグルを処理する関数
export async function toggleGroup(groupId: number, isOpen: boolean) {
  await prisma.group.update({
    where: { id: groupId },
    data: { isOpen: !isOpen },
  });
}