"use server"

import OpenAI from "openai"
import { GptMessage } from "@/types/types"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function sendGPT(messages: GptMessage[]): Promise<string> {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages,
  })

  return completion.choices[0].message
}