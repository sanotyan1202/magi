import { Message } from "@prisma/client"
import ReactMarkdown from 'react-markdown'
import styles from '@/styles/MessageBox.module.css'

type Props = {
  message: Message
}

export default function MessageBox({ message }: Props) {
  return (
    <div className="mt-4">
      <div className={`p-3 mb-2 bg-white rounded-lg shadow ${styles.markdownContent}`}>
        <div className="font-bold">{message.name}</div>
        <div className="text-sm text-gray-600">
          <ReactMarkdown>
            {message.content.replace(/\n/g, "  \n")}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}