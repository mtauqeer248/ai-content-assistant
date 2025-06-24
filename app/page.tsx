

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Chat Section */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">AI Chat</h2>
          {/* Chat UI Placeholder */}
        </section>

        {/* Content Cards Section */}
        <section className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Content Cards</h2>
          {/* Cards UI Placeholder */}
        </section>
      </div>
    </main>
  );
}

