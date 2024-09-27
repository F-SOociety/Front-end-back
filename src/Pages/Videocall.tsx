import { Mic, Video, Hand, ScreenShare, MoreHorizontal, PhoneOff } from 'lucide-react'

const participants = [
  { name: 'Jenelia', image: '/images/videocall/mask Group.png?height=100&width=100&text=Jenelia' },
  { name: 'Joe Carlson', image: '/images/videocall/mask Group-1.png?height=100&width=100&text=Joe' },
  { name: 'Sera', image: '/images/videocall/mask Group-2.png?height=100&width=100&text=Sera' },
  { name: 'John', image: '/images/videocall/mask Group-3.png?height=100&width=100&text=John' },
  { name: 'David', image: '/images/videocall/mask Group-4.png?height=100&width=100&text=David' },
  { name: 'Green', image: '/images/videocall/mask Group-5.png?height=100&width=100&text=Green' },
  { name: 'Monica', image: '/images/videocall/mask Group-6.png?height=100&width=100&text=Monica' },
  { name: 'Carol', image: '/images/videocall/mask Group-7.png?height=100&width=100&text=Carol' },
]

export default function VideoConference() {
  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-purple-700 text-white p-3 rounded-t-lg flex items-center space-x-2 mb-4">
          <img src="/images/videocall/fatima1.png?height=40&width=40&text=F" alt="Fathima" className="w-8 h-8 rounded-full" />
          <span className="font-semibold">Fathima is presenting</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {/* Main presenter */}
          <div className="lg:w-2/3 bg-gray-200 rounded-lg overflow-hidden">
            <img src="/images/videocall/fatimamain.png?height=400&width=600&text=Fathima" alt="Fathima" className="w-full h-full object-cover" />
            <div className="bg-black bg-opacity-50 text-white p-2 absolute bottom-0 left-0">
              Class meeting
            </div>
          </div>

          {/* Participants grid */}
          <div className="lg:w-1/3 grid grid-cols-2 gap-2">
            {participants.map((participant, index) => (
              <div key={index} className="relative">
                <img src={participant.image} alt={participant.name} className="w-full h-32 object-cover rounded-lg" />
                <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                  {participant.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control bar */}
        <div className="bg-purple-700 p-4 rounded-lg flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="bg-gray-800 p-3 rounded-full text-white"><Mic className="w-6 h-6" /></button>
            <button className="bg-gray-800 p-3 rounded-full text-white"><Video className="w-6 h-6" /></button>
            <button className="bg-gray-800 p-3 rounded-full text-white"><Hand className="w-6 h-6" /></button>
            <button className="bg-gray-800 p-3 rounded-full text-white"><ScreenShare className="w-6 h-6" /></button>
            <button className="bg-gray-800 p-3 rounded-full text-white"><MoreHorizontal className="w-6 h-6" /></button>
          </div>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full flex items-center space-x-2">
            <PhoneOff className="w-6 h-6" />
            <span>End</span>
          </button>
        </div>
      </div>
    </div>
  )
}