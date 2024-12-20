import Header from "@/components/layout/header/Header"
import SideMenuContainer from "@/components/aside/SideMenuContainer"

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between p-4 text-white bg-gray-800">
        <Header />
      </header>
      <main className="flex flex-grow overflow-hidden">
        <aside className="w-64 p-4 overflow-y-auto text-white bg-gray-900">
          <SideMenuContainer />
        </aside>
        <article>

        </article>
      </main>
    </>
  )
}
