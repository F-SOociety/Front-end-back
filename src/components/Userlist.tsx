import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Define the interface for the User object
interface User {
  id: string;
  name: string;
  email: string;
  profilePic: string;
  unread: number; // Unread messages count
  time: string;
}

interface UserListProps {
  onUserSelect: (userId: string) => void; // Function to select a user
}

const UserList: React.FC<UserListProps> = ({ onUserSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Search term state

  const auth = getAuth();
  const currentUser = auth.currentUser; // Get current logged-in user

  useEffect(() => {
    const fetchUsers = async () => {
      const userCollection = collection(db, 'users');
      const userSnapshot = await getDocs(userCollection);
      const userList: User[] = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[]; // Explicitly cast to User[]

      // Filter out the logged-in user from the list
      const otherUsers = userList.filter((user) => user.email !== currentUser?.email);
      setUsers(otherUsers);
      setFilteredUsers(otherUsers);
    };

    fetchUsers();
  }, [currentUser]);

  useEffect(() => {
    // Filter users based on the search term
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <div className="flex flex-col bg-gradient-to-b from-purple-500 to-indigo-700 p-4 shadow-lg">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-full p-2 mb-4">
        <input
          type="text"
          className="bg-transparent w-full text-white outline-none px-4"
          placeholder="Type your search ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex mb-4 space-x-4">
        <button
          className="bg-green-500 text-white rounded-full px-4 py-1"
          onClick={() => setFilteredUsers(users)}
        >
          All
        </button>
        <button
          className="bg-gray-800 text-white rounded-full px-4 py-1"
          onClick={() =>
            setFilteredUsers(users.filter((user) => user.unread > 0))
          }
        >
          Unread
        </button>
      </div>

      {/* User List */}
      <div className="flex flex-col space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => onUserSelect(user.id)}
          >
            <img
              src={user.profilePic}
              alt={`${user.name}'s avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-grow">
              <p className="font-bold text-gray-900">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>

            {/* Display unread messages count if any */}
            <div className="flex flex-col items-end">
              <p className="text-gray-400">{user.time}</p>
              {user.unread > 0 && (
                <span className="bg-red-500 text-white rounded-full px-3 py-1 text-sm">
                  {user.unread} unread
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
