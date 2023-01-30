import React, { useEffect } from 'react';
import './styles.css';

function Login({ handleLogin, setLoginState, setToken }) {

    useEffect(() => {
        const hash = window.location.hash;
        if(hash) {
            const token = hash.substring(1).split("&")[0].split("=")[1];
            setToken(token);
            setLoginState(true);
        }
    })

    return (
        <div className='loginContainer'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt=""></img>
            <button onClick={handleLogin}>Connect</button>
        </div>
    )
}


export { Login }; 