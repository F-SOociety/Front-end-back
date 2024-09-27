import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom'; // Updated for React Router v6

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [previewPic, setPreviewPic] = useState<string | null>(null); // For image preview
  const navigate = useNavigate(); // Use useNavigate for redirection

  useEffect(() => {
    if (profilePic) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewPic(reader.result as string);
      reader.readAsDataURL(profilePic);
    } else {
      setPreviewPic(null);
    }
  }, [profilePic]);

  const handleSubmit = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();
    const storage = getStorage();

    if (user && profilePic) {
      try {
        // Upload the profile picture to Firebase Storage
        const profilePicRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(profilePicRef, profilePic);
        const profilePicUrl = await getDownloadURL(profilePicRef);

        // Store user info in Firestore
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, {
          uid: user.uid,
          name: name,
          email: user.email,
          profilePic: profilePicUrl, // Save profile pic URL
        });

        alert('Profile created successfully!');
        navigate('/home-v2'); // Redirect after submission using useNavigate
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('There was an error updating your profile. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-darkBlue text-white py-8">
      <h1 className="text-3xl font-bold mb-6">Create Your Profile</h1>
      <input
        className="border p-2 rounded mb-4 bg-gradient-to-r from-violet-500 to-violet-700 text-black"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="mb-4"
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePic(e.target.files ? e.target.files[0] : null)}
      />
      {previewPic && (
        <div className="mb-4">
          <img src={previewPic} alt="Profile Preview" className="w-32 h-32 rounded-full object-cover" />
        </div>
      )}
      <button
        className="bg-gradient-to-r from-violet-500 to-violet-700 text-white py-2 px-6 rounded shadow-md hover:shadow-lg transition-all"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Profile;
