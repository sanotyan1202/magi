import Header from "@/components/layout/header/Header"
import SideMenuContainer from "@/components/layout/aside/SideMenuContainer"

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between p-4 text-white bg-gray-800">
        <Header />
      </header>
      <main className="flex flex-grow">
        <aside className="w-64 p-4 z-50 text-white bg-gray-900">
          <SideMenuContainer />
        </aside>
        <article className="flex flex-grow overflow-hidden">
          {children}
        </article>
      </main>
    </>
  )
}