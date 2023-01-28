import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faBackward, faForward, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faBackward, faForward, faVolumeUp)

function PlayerControl() {

    return (
        <React.Fragment>
            <div className='playerContainer'>
                <div className='nowPlaying'>
                    <img src="#" alt=""/>
                    <div className='songDetails'>
                        <p className='songTitle'>Song title</p>
                        <p className='bandName'>Band name</p>
                    </div>
                </div>
                <div className='playerControlsContainer'>
                    <div className='playerControls'>
                        <FontAwesomeIcon className="playerIcon" icon="backward" />
                        <span>
                            <FontAwesomeIcon className="playerIcon--play" icon='play'/>
                        </span>
                        <FontAwesomeIcon className="playerIcon" icon="forward" />
                    </div>
                    <div className='playProgressBar'>
                        <div></div>
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