import { SetState } from "@/types/types"

type Props = {
  children: React.ReactNode,
  setShowModal: SetState<boolean>,
}

export default function Modal({ children, setShowModal }: Props) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white p-6 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}