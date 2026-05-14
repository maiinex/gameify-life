import { useEffect, useState } from 'react'
import './App.css'

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getSession, logout, onAuthChange } from './auth/authService';
import { sendSession } from './api/profileApi';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);


  useEffect(() => {
    async function loadSession() {
      const { data } = await getSession();
      setSession(data.session);
    }

    loadSession();

    const { data } = onAuthChange((_event, session) => {
      setSession(session);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  // Loads profile when session exists
  useEffect(() => {
    async function loadProfile() {
      if (!session) {
        setProfile(null);
        return;
      }

      const data = await sendSession(session);
      setProfile(data);
    }

    loadProfile();
  }, [session])

  async function handleLogout() {
    await logout();
    setSession(null);
  }

  return (
    <div>
      <h1>Gameify Life Authentication</h1>
      {session ? (
        <div>
          <p>Logged in as: {session.user.email}</p>
          <button onClick={handleLogout}>Logout</button>
          <ProfilePage profile={profile} />
        </div>
      ) : (
        <div>
          <RegisterPage />
          <LoginPage />
        </div>
      )}

    </div>

  )
}

export default App
