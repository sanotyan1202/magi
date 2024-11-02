import Header from "@/components/header/Header"
import SideMenuContainer from "@/components/aside/SideMenuContainer"

type Props = {
  children: React.ReactNode
}

export default function ChatLayout({ children }: Props) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between p-4 text-white bg-gray-800">
        <Header />
      </header>
      <main className="flex flex-grow pt-16 scroll-hide">
        <aside className="fixed top-16 left-0 w-64 h-full p-4 z-40 text-white bg-gray-900">
          <SideMenuContainer />
        </aside>
        <article className="flex flex-grow overflow-hidden pl-64 scroll-hide">
          {children}
        </article>
      </main>
    </>
  )
}