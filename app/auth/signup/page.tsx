import React from 'react'

const page = () => {
  return (
      <>
     <div className="flex min-h-screen bg-gray-100">
  {/* Left side text */}
  <div className="flex-1 flex flex-col justify-center px-16 bg-gradient-to-b from-blue-200 to-blue-400">
    <h1 className="text-5xl font-bold mb-4">Welcome to Domorang!</h1>
    <p className="text-lg text-gray-800">
      Find, list, and manage verified properties in Abuja. Fast, secure, and hassle-free
    </p>
  </div>

  {/* Right side card */}
  <div className="flex-1 flex items-center justify-center px-12">
    <div className="w-full max-w-md p-12 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>

      {/* Example form */}
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</div>
      </>
  )
}

export default page