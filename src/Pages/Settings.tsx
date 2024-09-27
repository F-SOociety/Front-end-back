import React, { useEffect, useState } from 'react';
import { Bell, Edit, Users, Lock, Shield, Key, Palette, UserPlus, HelpCircle, LogOut } from 'lucide-react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface User {
  uid: string;
  name: string;
  email: string;
  phoneNumber: string;
  profilePic: string;
}

export default function ProfileSettings() {
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
    <div className="min-h-screen bg-navy-900 text-white p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <img
            src={user.profilePic} // Use logged-in user's profile pic
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1> {/* Use logged-in user's name */}
            <p className="text-gray-400">{user.email}</p> {/* Use logged-in user's email */}
            <p className="text-gray-400">{user.phoneNumber}</p> {/* Use logged-in user's phone number */}
          </div>
        </div>

        {/* Settings Sections */}
        <SettingsSection icon={<Bell className="w-5 h-5" />} title="Alerts" />

        <SettingsSection icon={<Edit className="w-5 h-5" />} title="Edit Profile">
          <SettingsItem icon={<Users className="w-5 h-5" />} title="Contacts" />
        </SettingsSection>

        <SettingsSection icon={<Lock className="w-5 h-5" />} title="Privacy">
          <SettingsItem icon={<Shield className="w-5 h-5" />} title="Safety" />
          <SettingsItem icon={<Key className="w-5 h-5" />} title="Two-Factor Authentication" />
        </SettingsSection>

        <SettingsSection icon={<Palette className="w-5 h-5" />} title="Theme">
          <SettingsItem icon={<Users className="w-5 h-5" />} title="Switch Account" />
          <SettingsItem icon={<UserPlus className="w-5 h-5" />} title="Add New Account" />
          <SettingsItem icon={<HelpCircle className="w-5 h-5" />} title="Help" />
        </SettingsSection>

        {/* Log Out Button */}
        <button className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          <LogOut className="w-5 h-5 mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
}

function SettingsSection({ icon, title, children }: { icon: React.ReactNode; title: string; children?: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg p-4 space-y-2">
      <div className="flex items-center space-x-2 text-lg font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

function SettingsItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center space-x-2 text-gray-300 pl-6">
      {icon}
      <span>{title}</span>
    </div>
  );
}
