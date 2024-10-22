import Messages from "@/components/chat/Messages" 
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function MessagesContainer() {

  const messages  = await prisma.message.findMany()

  return (
    <Messages messages={messages} />
  )
}