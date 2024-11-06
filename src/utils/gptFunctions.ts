import { Member } from "@/prisma-types"
import { GptMessage } from "@/types/types"
import { sendGPT } from "@/actions/gpt"
import { ResponseWithMember } from "@/types/types"
import { ChatCompletionMessage } from "openai/resources/index.mjs"
  
export async function sendMessageToGPT(
  members: Member[],
  message: string,
  additionalRole: string = '',
): Promise<ResponseWithMember[]> {

  const responses: ResponseWithMember[] = []

  // メンションが含まれているか
  let noMension = true

  // メンションされているメンバーそれぞれにメッセージを送信
  for (const member of members) {

    // メンションが含まれている場合、メンションされたメンバーにメッセージを送信
    if (message.includes(`@${member.role}`)) {

      // メンションあり
      noMension = false

      const messages: GptMessage[] = [
        {
          role: "system",
          content: `${additionalRole} あなたのキャラクターは「${member.content}」です。 あなた宛のメンション「@${member.role}」に返事をしてください。`,
        },
        { role: "user", content: message, },
      ]

      // メッセージを送信
      const response = await sendGPT(messages)

      // レスポンスを追加
      if (response.content !== null) {
        responses.push({
          role: member.role,
          content: response.content,
        })
      }
    }
  }

  // メンションが含まれていない場合、Assistantにメッセージを送信
  if (noMension) {
    const messages: GptMessage[] = [
      { role: "system", content: `${additionalRole} you are helpful assistant` },
      { role: "user", content: message },
    ]

    // メッセージを送信
    const response = await sendGPT(messages)

    // レスポンスを追加
    if (response.content !== null) {
      responses.push({
        role: `Assistant`,
        content: response.content,
      })
    }
  }

  return responses
}



export async function sendConversationToGPT(
  members: Member[],
  thmeme: string,
  message: string = `@${members[0].role} あなたから始めてください`,
): Promise<ResponseWithMember[]> {
  return await sendMessageToGPT(members, message, `会議のうちの誰かに話しかける形で会話をしてください。会話に参加するメンバーは「${members.map(m => m.role)}」です。必ずメッセージの先頭に「@メンバー名」という形でメンションをつけてください。会話のテーマは「${thmeme}」です。` )
}