import React, { useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faBackward, faForward, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faBackward, faForward, faVolumeUp)

interface SongItemPlayedProps {
    name: string;
    artist: string;
    album: string;
    image: string;
    duration: number;
}

interface PlayerControlProps {
    token: string;
}

const PlayerControl: React.FC<PlayerControlProps> = ({ token }) => {
    
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ recentlyPlayed, setRecentlyPlayed ] = useState<SongItemPlayedProps>({
        name: '',
        artist: '',
        album: '',
        image: '',
        duration: 0
    });

    useEffect(() => {
        const getRecentlyPlayed = async (token: string) => {
            const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const track = data.items[0].track;
            setRecentlyPlayed({
                name: track.album.name,
                artist: track.album.artists[0].name,
                album: track.album.name,
                image: track.album.images[0].url,
                duration: track.duration_ms
            });
        };

        getRecentlyPlayed(token);
    }, [token]);
    return (
        <React.Fragment>
            <div className='playerContainer'>
                <div className='nowPlaying'>
                    <img src={recentlyPlayed.image} alt=""/>
                    <div className='songDetails'>
                        <p className='songTitle'>{recentlyPlayed.name}</p>
                        <p className='bandName'>{recentlyPlayed.artist}</p>
                    </div>
                </div>
                <div className='playerControlsContainer'>
                    <div className='playerControls'>
                        <FontAwesomeIcon className="playerIcon" icon="backward" />
                        <span onClick={() => setIsPlaying(!isPlaying)}>
                            <FontAwesomeIcon
                                className={isPlaying ? "playerIcon--pause" : "playerIcon--play"}
                                icon={isPlaying ? faPause : faPlay} />
                        </span>
                        <FontAwesomeIcon className="playerIcon" icon="forward" />
                    </div>
                    <div className='progressBarContainer'>
                        <div className='playProgressBar'>
                            <div></div>
                        </div>
                        <span className='duration'><p>{(recentlyPlayed['duration'] / 1000 / 60).toFixed(2).replace('.', ':')}</p></span>
                    </div>
                    <div className="volume">
                        <FontAwesomeIcon icon="volume-up" aria-hidden="true" />
                        <input type="range" min="0" max="100" className="volume-range"></input>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export { PlayerControl };