import  { useEffect, useState } from 'react';
import { X, Video, Phone } from 'lucide-react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface User {
  uid: string;
  name: string;
  profilePic: string;
}

export default function ContactInfo() {
  const [user, setUser] = useState<User | null>(null); // Store the logged-in user's data
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user's details from Firestore
  useEffect(() => {
    const fetchUserDetails = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', currentUser.uid); // Reference to logged-in user's document
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data() as User;
          setUser(userData);
        }
      }

      setLoading(false);
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>; // Show loading indicator
  }

  if (!user) {
    return <div className="text-white">No user data found</div>; // If no user data is available
  }

  return (
    <div className="bg-blue-950 text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <X className="w-6 h-6" />
            <span className="text-lg font-semibold">Contact info</span>
          </div>
          <div className="w-6"></div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.profilePic} // Use logged-in user's profile pic
            alt={user.name}
            className="w-32 h-32 rounded-full mb-2"
          />
          <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
          <span className="text-green-400">Online</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 bg-gray-700 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-3 bg-gray-700 rounded-full">
            <Phone className="w-6 h-6" />
          </button>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p>Hi, I am {user.name}...</p>
        </div>

        {/* Settings Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-white">
            <span>Mute notifications</span>
            <input
              type="checkbox"
              className="h-6 w-6 rounded-full bg-gray-700 checked:bg-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-between items-center text-white">
            <span>Disappearing messages</span>
            <span className="text-gray-400">Off</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-4">
          <button className="flex items-center text-red-500">
            <span className="mr-2">⛔</span> Block
          </button>
          <button className="flex items-center text-red-500">
            <span className="mr-2">🚩</span> Report
          </button>
          <button className="flex items-center text-red-500">
            <span className="mr-2">🗑️</span> Delete chat
          </button>
        </div>
      </div>
    </div>
  );
}
