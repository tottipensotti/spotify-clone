import React from 'react';
import './styles.css';

function SongItem({ title, img }) {
    return (
        <div className='songContainer'>
            <img src={img} alt=""></img>
            <h4>{title}</h4>
        </div>
    )
}

function SongItemV2({ title, desc, img}) {
    return (
        <div className='songContainerV2'>
            <img src={img} alt=""></img>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}

export { SongItem, SongItemV2 };