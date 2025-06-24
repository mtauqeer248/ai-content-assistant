import { ThemeToggle } from '../components/UI/ThemeToggle'

export default function Home() {
 
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Left: Chat UI */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">AI Chat</h2>
        </section>

        {/* Right: Content Cards */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Content Cards</h2>
        </section>
      </div>
    </main>
  )
}


