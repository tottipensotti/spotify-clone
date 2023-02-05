import './App.css';
import React, { useState } from 'react';
import { Login } from './components/Login';
import { AppUI } from './AppUI';

function App() {
  const [ token, setToken ] = useState('');
  const [ loginState, setLoginState] = useState(false);
  
  const handleLogin = () => {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URL = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scope = [
        'user-read-email',
        'user-read-private',
        'user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-library-read',
        'user-read-playback-position',
        'user-top-read'
    ];
    window.location.href = `${apiUrl}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`
  }
  
  return (
    <React.Fragment>
      {!loginState ? 
        <Login handleLogin = {handleLogin} setLoginState = {setLoginState} setToken = {setToken}/> 
        : <AppUI token = {token}/>}
    </React.Fragment>
  );
}

export default App;
