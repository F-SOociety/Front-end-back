

function ChatInterface() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Start chatting instantly in<br />real-time, without any<br />delays.
          </h1>
          <p className="text-gray-400 mb-6 max-w-md">
            Experience seamless communication and connect with ease.<br />
            Stay connected effortlessly and chat without interruptions.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start chatting now
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg transform rotate-1"></div>
            <div className="relative bg-gray-800 rounded-lg p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Hi John!</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Hello! How are you doing?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Just sent you the final logo for our project</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Great! Let's discuss it in our meeting later.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Sure, see you then!</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-gray-700 rounded-full p-2 flex items-center">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="bg-transparent text-white w-full focus:outline-none px-2"
                  />
                  <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface
