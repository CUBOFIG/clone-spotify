import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login.jsx'
import { getTokenFromUrl } from './components/Spotify/Spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log("I have a token =>>>", token);
  }, []);

  return (
    <div className="App">
      {token ? (<h1>I am logged in</h1>) : (<Login />)}
    </div>
  );
}

export default App;
