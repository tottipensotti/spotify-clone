import React from 'react';
import './styles.css';
import { SongItem, SongItemV2 } from '../SongItem'

function HomeScreen() {
    const songs = [
        {title: 'Song N1', band: 'Band 1', img:'', desc:'something cool'},
        {title: 'Song N2', band: 'Band 2', img:'', desc: 'something cool'},
        {title: 'Song N3', band: 'Band 3', img:'', desc: 'something cool'},
        {title: 'Song N4', band: 'Band 4', img:'', desc: 'something cool'},
        {title: 'Song N5', band: 'Band 5', img:'', desc: 'something cool'},
        {title: 'Song N6', band: 'Band 6', img:'', desc: 'something cool'}
    ]
    return (
        <div className='homeContainer'>
            <h2>Hello!</h2>
            <section className="lastPlayed">
                {songs.map(song => (
                    <SongItem
                        key = {song.title}
                        title = {song.title}
                        band = {song.band}
                        img = {song.img}
                    />
                ))}
            </section>
            <section>
                <h3>Songs you liked</h3>
                <div className='yourSongs'>
                    {songs.slice(0,4).map(song => (
                            <SongItemV2
                                key = {song.title}
                                title = {song.title}
                                desc = {song.desc}
                                img = {song.img}
                            />
                    ))}
                </div>
            </section>
            <section>
                <h3>Some recomendations for you :)</h3>
                <div className="recomendations">
                    {songs.slice(0,4).map(song => (
                        <SongItemV2
                            key = {song.title}
                            title = {song.title}
                            desc = {song.desc}
                            img = {song.img}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}


export { HomeScreen };

