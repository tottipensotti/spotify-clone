import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay)

function SongItem({ name, image }) {
    const [ showIcon, setShowIcon ] = useState(false)

    return (
        <div className='songContainer'
            onMouseOver = {() => setShowIcon(true)}
            onMouseOut = {() => setShowIcon(false)}
        >
            <img src={image} alt=""></img>
            {showIcon && (<div className='playHover'>
                <span>
                    <FontAwesomeIcon icon='play'/>
                </span>
            </div>)}
            <h4>{name}</h4>
        </div>
    )
}

function SongItemV2({ name, artist, image}) {
    const [ showIcon, setShowIcon ] = useState(false)
    return (
        <div className='songContainerV2'
            onMouseOver = {() => setShowIcon(true)}
            onMouseOut = {() => setShowIcon(false)}
        >
            <img src={image} alt=""></img>
            {showIcon && (
            <div className='playHoverV2'>
                <span>
                    <FontAwesomeIcon icon='play'/>
                </span>
            </div>
            )}
            <h4>{name}</h4>
            <p>{artist}</p>
        </div>
    )
}

export { SongItem, SongItemV2 };