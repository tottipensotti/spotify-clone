// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { SideBar } from './components/SideBar';
import { HomeScreen } from './components/HomeScreen';
import { PlayerControl } from './components/PlayerControl';
// import { ArtistPage } from './components/ArtistPage';
// import { PlaylistPage } from './components/PlaylistPage';
// import { AlbumPage } from './components/AlbumPage';

function App() {
  return (
    <React.Fragment>
      <SideBar />
      <HomeScreen />
      {/* {openArtistPage && (
        <ArtistPage />
      )} */}
      {/* {openPlaylist && (
        <PlaylistPage />
      )} */}
      {/* {openAlbum && (
        <AlbumPage />
      )} */}
      <PlayerControl />
    </React.Fragment>
  );
}

export default App;
