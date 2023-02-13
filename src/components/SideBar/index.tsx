import React, { useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faSearch, faMusic } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faSearch, faMusic);

interface SideBarProps {
  token: string;
}

const SideBar: React.FC<SideBarProps> = ({ token }) => {
  const [playlists, setPlaylists] = useState<string[]>([]);

  useEffect(() => {
    const getPlaylistData = async (token: string) => {
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const items = data.items;

      setPlaylists(items.map((item: { name: any; }) => item.name));
    };

    getPlaylistData(token);
  }, [token]);

  return (
    <div className="sideBarContainer">
      <div className="shortcutsIcon">
        <ul>
          <li>
            <FontAwesomeIcon icon="house" />
            Home
          </li>
          <li>
            <FontAwesomeIcon icon="search" />
            Search
          </li>
          <li>
            <FontAwesomeIcon icon="music" />
            Your Library
          </li>
        </ul>
      </div>
      <div className="yourPlaylists">
        <ul>
          {playlists.map((playlist, index) => (
            <li key={index}>{playlist}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SideBar };