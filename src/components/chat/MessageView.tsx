import MessagesContainer from "@/components/chat/MessagesContainer";

export default function MessageView() {
  return (
    <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
      <div className="text-gray-600">Welcome to #general! This is the beginning of your conversation.</div>
      <MessagesContainer />
    </div>
  )
}