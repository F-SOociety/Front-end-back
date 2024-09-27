import React, { useState, useEffect } from "react";
import { auth, realTimeDb } from "../firebase";
import { ref, onValue, push } from "firebase/database";
import { format } from "date-fns";

// Defining types for User and Message
interface User {
  id: string;
  name: string;
  profilePic: string;
}

interface Message {
  senderId: string;
  text: string;
  createdAt: number;
}

interface ChatRoomProps {
  selectedUserId: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ selectedUserId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getChatRoomId = (userId1: string, userId2: string) => {
    return userId1 < userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
  };

  useEffect(() => {
    const fetchUserData = () => {
      const userRef = ref(realTimeDb, `users/${selectedUserId}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setSelectedUser({
            id: selectedUserId,
            name: userData.name || 'Unknown User',
            profilePic: userData.profilePic || 'default-profile-pic-url',
          });
        }
      });
    };

    fetchUserData();
  }, [selectedUserId]);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const chatRoomId = getChatRoomId(currentUser.uid, selectedUserId);
    const messagesRef = ref(realTimeDb, `chatRooms/${chatRoomId}/messages`);

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedMessages: Message[] = Object.values(data);
        setMessages(formattedMessages);
      }
    });

    return () => unsubscribe();
  }, [selectedUserId]);

  const handleSendMessage = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser || !message.trim()) return;

    const chatRoomId = getChatRoomId(currentUser.uid, selectedUserId);
    const messagesRef = ref(realTimeDb, `chatRooms/${chatRoomId}/messages`);

    await push(messagesRef, {
      senderId: currentUser.uid,
      text: message,
      createdAt: Date.now(),
    });

    setMessage('');
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* User Info Section */}
        {selectedUser && (
          <div className="flex items-center space-x- text-white">
            <img
              src={selectedUser.profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-bold">{selectedUser.name}</h3>
            </div>
          </div>
        )}
        {/* Search and Options Icons */}
        <div className="flex space-x-4">
          <button className="bg-transparent p-2 rounded-full">
            <i className="fas fa-search text-white"></i>
          </button>
          <button className="bg-transparent p-2 rounded-full">
            <i className="fas fa-ellipsis-v text-white"></i>
          </button>
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => {
          const isCurrentUser = msg.senderId === auth.currentUser?.uid;
          return (
            <div key={index} className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-3 rounded-lg shadow-md ${isCurrentUser ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'}`}>
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-right mt-1 opacity-70">
                  {format(msg.createdAt, 'hh:mm a')}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Section */}
      <div className="p-4 bg-gray-800 flex items-center space-x-2">
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
