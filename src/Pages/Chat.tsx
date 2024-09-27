// src/pages/ChatApp.tsx
import React, { useState } from 'react';
import UserList from '../components/Userlist';
import ChatRoom from '../components/chatroom';

const ChatApp: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleUserSelect = (userId: string) => {
    console.log(`Chat initiated with user: ${userId}`); // Debugging: Check if the selectedUserId is set
    setSelectedUserId(userId);
  };

  return (
    <div className="flex h-screen">
      {/* Left side user list */}
      <div className="w-1/3  border-r">
        <UserList onUserSelect={handleUserSelect} /> {/* Correctly passing onUserSelect */}
      </div>

      {/* Right side chat room */}
      <div className="w-2/3 bg-white">
        {selectedUserId ? (
          <ChatRoom selectedUserId={selectedUserId}  /> // Only show ChatRoom if a user is selected
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
