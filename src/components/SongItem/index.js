import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay)

function SongItem({ title, img }) {
    const [ showIcon, setShowIcon ] = useState(false)
    return (
        <div className='songContainer'
            onMouseOver = {() => setShowIcon(true)}
            onMouseOut = {() => setShowIcon(false)}
        >
            <img src={img} alt=""></img>
            {showIcon && (<div className='playHover'>
                <span>
                    <FontAwesomeIcon icon='play'/>
                </span>
            </div>)}
            <h4>{title}</h4>
        </div>
    )
}

function SongItemV2({ title, desc, img}) {
    const [ showIcon, setShowIcon ] = useState(false)
    return (
        <div className='songContainerV2'
            onMouseOver = {() => setShowIcon(true)}
            onMouseOut = {() => setShowIcon(false)}
        >
            <img src={img} alt=""></img>
            {showIcon && (
            <div className='playHoverV2'>
                <span>
                    <FontAwesomeIcon icon='play'/>
                </span>
            </div>
            )}
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export { SongItem, SongItemV2 };