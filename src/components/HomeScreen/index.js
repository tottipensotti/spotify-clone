import React, { useState, useEffect } from 'react';
import './styles.css';
import { SongItem, SongItemV2 } from '../SongItem'

function HomeScreen({ token }) {
    const [ albums, setAlbums ] = useState([])
    const [ tracks, setTracks ] = useState([])
    const [ recomendations, setRecomendations ] = useState([])

    useEffect(() => {
        const getAlbums = async (token) => {
            const response = await fetch('https://api.spotify.com/v1/me/albums?limit=4', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const items = data.items;
            
            setAlbums(items.map((item) => ({
                'name': item.album.name,
                'artist': item.album.artists[0].name,
                'image': item.album.images[0].url
            })))
        };

        getAlbums(token);
    }, [token]);

    useEffect(() => {
        const getTracks = async (token) => {
            const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=6', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const items = data.items;
            setTracks(items.map((item) => ({
                'name': item.name,
                'artist': item.artists[0].name,
                'image': item.album.images[0].url
            })))
        };

        getTracks(token);
    }, [token]);

    useEffect(() => {
        const getRecomendations = async (token) => {
            const response = await fetch('https://api.spotify.com/v1/browse/new-releases?limit=4&country=AR', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const items = data.albums.items;
            console.log(items)
            setRecomendations(items.map((item) => ({
                'name': item.name,
                'artist': item.artists[0].name,
                'image': item.images[0].url
            })))
        };

        getRecomendations(token);
    }, [token]);

    return (
        <div className='homeContainer'>
            <h2>Hello!</h2>
            <section className="lastPlayed">
                {tracks.map(track => (
                    <SongItem
                        key = {track.name}
                        name = {track.name}
                        artist = {track.artist}
                        image = {track.image}
                    />
                ))}
            </section>
            <section>
                <h3>Some recomendations for you :)</h3>
                <div className="recomendations">
                    {recomendations.slice(0,4).map(recomendations => (
                        <SongItemV2
                            key = {recomendations.name}
                            name = {recomendations.name}
                            artist = {recomendations.artist}
                            image = {recomendations.image}
                        />
                    ))}
                </div>
            </section>
            <section>
                <h3>Albums you liked</h3>
                <div className='yourSongs'>
                    {albums.map(album => (
                            <SongItemV2
                                key = {album.name}
                                name = {album.name}
                                artist = {album.artist}
                                image = {album.image}
                            />
                    ))}
                </div>
            </section>
        </div>
    )
}


export { HomeScreen };

