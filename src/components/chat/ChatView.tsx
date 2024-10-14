import MessageView from "@/components/chat/MessageView"
import MessageForm from "@/components/chat/MessageForm"

export default function ChatView() {
  return (
    <>
      <div className="flex flex-col flex-grow">
        <MessageView />
        <MessageForm />
      </div>
    </>
  )
}