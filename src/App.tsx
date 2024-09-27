
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

import Home from './Pages/Home';


import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ProfileSettings from './Pages/Settings';
import ContactInfo from './Pages/Contact';
import VideoConference from './Pages/Videocall';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/profile';
import ChatApp from './Pages/Chat';
import Homev2 from './Pages/Afterlg';



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/home-v2" element={<ProtectedRoute element={<Homev2 />} />} />
          <Route path="/chat" element={<ProtectedRoute element={<ChatApp />} />} />
          <Route path="/settings" element={<ProtectedRoute element={<ProfileSettings />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<ContactInfo />} />} /> 
          <Route path="/Videoconference" element={<ProtectedRoute element={<VideoConference />} />} />      
             </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
