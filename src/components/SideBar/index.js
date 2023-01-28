import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faSearch, faMusic } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faSearch, faMusic)

function SideBar() {
    // Hardcodeado para visualizar
    const playlists = [
        'playlist 1','playlist 2','playlist 3','playlist 4','playlist 5',
        'playlist 6','playlist 7','playlist 8','playlist 9','playlist 10',
        'playlist 11','playlist 12','playlist 13','playlist 14','playlist 15',
        'playlist 16','playlist 17','playlist 18','playlist 19','playlist 20'
    ]
    return (
        <React.Fragment>
            <div className='sideBarContainer'>
            <div className='shortcutsIcon'>
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
            <div className='yourPlaylists'>
                <ul>
                    {playlists.map(playlist => (
                        <li>{playlist}</li>
                    ))}
                </ul>
            </div>
            </div>
        </React.Fragment>
    )
}


export { SideBar };