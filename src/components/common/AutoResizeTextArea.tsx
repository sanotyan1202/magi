"use client"

import { useState } from "react"
import { SetState } from "@/types/types"
import { useRef, useEffect } from "react"

type Props = {
  message: string,
  setMessage: SetState<string>,
  suggestions: string[],
}

export default function AutoResizeTextArea(
  { message, setMessage, suggestions }: Props
) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [highlightIndex, setHighlightIndex] = useState(-1) // 矢印キー位置
  const suggestionsRef = useRef<HTMLDivElement>(null)


  // テキストエリアの高さを自動調整
  const autoResizeTextArea =
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = e.target
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight + 4}px`
    }
  
  // メンションの候補を表示
  const handleChange =
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // メッセージを更新
      const inputValue = e.target.value
      setMessage(inputValue)

      // 最後に入力された単語を取得
      const lastWord = inputValue.split(" ").pop()

      // 最後の単語の先頭が@の時
      if (lastWord && lastWord.startsWith("@")) {
        
        // @を取り除いて小文字に変換
        const query = lastWord.slice(1).toLowerCase()

        // 候補のフィルターを生成
        const filtered = suggestions.filter(s =>
          s.toLowerCase().includes(query)
        )

        // フィルターをセット
        setFilteredSuggestions(filtered)

        // 候補が0でない場合候補を表示
        setShowSuggestions(filtered.length > 0)

        // 選択行をリセット
        setHighlightIndex(-1)
      } else {
        // 候補を非表示にする
        setShowSuggestions(false)
      }
    }
  
  // 候補をクリックした時の処理
  const handleSuggestionClick =
    (suggestion: string) => {

      // 入力メッセージを分割して最後の単語を削除し、候補を追加
      const words = message.split(" ")
      words.pop()

      // 入力メッセージの末尾にメンションを付与
      const newMessage = [...words, suggestion].join(" ") + " "

      // メッセージを更新
      setMessage(newMessage)

      // 候補を非表示にする
      setShowSuggestions(false)
    }
  
    // 候補表示中の矢印キー操作
    const handleKeyDown =
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // 候補表示中の場合
        if (showSuggestions) {
          // 下キー
          if (e.key === "ArrowDown") {
            setHighlightIndex((prevIndex) =>
              prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 :0
            )
            e.preventDefault()
          // 上キー
          } else if (e.key === "ArrowUp") {
            setHighlightIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length -1
            )
            e.preventDefault()
          // Enterキー
          } else if (e.key === "Enter" && highlightIndex >= 0) {
            handleSuggestionClick(filteredSuggestions[highlightIndex])
            e.preventDefault()
          // Escapeキー
          } else if (e.key === "Escape") {
            setShowSuggestions(false)
          }
        }
      }
  
    useEffect(() => {
      if (highlightIndex >= 0 && suggestionsRef.current) {
        const selectedElement = suggestionsRef.current.children[highlightIndex] as HTMLElement
        selectedElement?.scrollIntoView({ block: "nearest" })
      }
    }, [highlightIndex])
  
  return (
    <>
      <textarea
        onChange={handleChange}
        onInput={autoResizeTextArea}
        onKeyDown={handleKeyDown}
        value={message}
        placeholder="Type a message..."
        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-500 focus:outline-none resize-none overflow-hidden"></textarea>
      {showSuggestions && (
        <div
          style={{ bottom: "100%", marginBottom: "-15px" }}
          className="absolute bg-white border rounded shadow-lg text-gray-500"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`cursor-pointer p-2 hover:bg-gray-200 ${
                highlightIndex === index ? "bg-gray-200" : ""
              }`}
            >
              {suggestion}
            </div>
          ))}
        </div>
        )}
    </>
  )
}