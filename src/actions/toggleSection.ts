"use server"

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function toggleSection(sectionId: number, isOpen: boolean) {
  await prisma.section.update({
    where: { id: sectionId },
    data: { isOpen: !isOpen },
  });
}