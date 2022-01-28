const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Hello</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Starter Application
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
            Starter application with next.js, eslint, jest, and tailwindcss by Thomas E. Knickman
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
