import React, { useState, useEffect } from 'react';
import './styles.css';
import { SongItemPlayed } from '../SongItemPlayed'
import { SongItemHome } from '../SongItemHome'

interface Album {
    name: string;
    artist: string;
    image: string;
}

interface Track {
    name: string;
    artist: string;
    image: string;
}

interface Props {
    token: string;
}

const HomeScreen: React.FC<Props> = ({ token }) => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [tracks, setTracks] = useState<Track[]>([]);
    const [recomendations, setRecomendations] = useState<Album[]>([]);


    useEffect(() => {
        const getAlbums = async (token: string) => {
            const response = await fetch(
                'https://api.spotify.com/v1/me/albums?limit=8',
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                }
            );
            const data = await response.json();
            const items = data.items;
        
            setAlbums(
                items.map((item: {
                            album: {
                                    name: any;
                                    artists: { name: any; }[];
                                    images: { url: any; }[];
                            };
                }) => ({
                    name: item.album.name,
                    artist: item.album.artists[0].name,
                    image: item.album.images[0].url,
                }))
            );
        };
        getAlbums(token);
    }, [token]);

    useEffect(() => {
        const getTracks = async (token: string) => {
            const response = await fetch(
                'https://api.spotify.com/v1/me/top/tracks?limit=6',
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                }
            );
            const data = await response.json();
            const items = data.items;
            setTracks(
                items.map((item: {
                            name: any;
                            artists: { name: any; }[];
                            album: { images: { url: any; }[]; };
                }) => ({
                    name: item.name,
                    artist: item.artists[0].name,
                    image: item.album.images[0].url,
                }))
            );
        };
    
        getTracks(token);
    }, [token]);

    useEffect(() => {
        const getRecomendations = async (token: string) => {
            const response = await fetch(
                'https://api.spotify.com/v1/browse/new-releases?limit=12&country=AR',
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
                }
            );
            const data = await response.json();
            const items = data.albums.items;
            setRecomendations(
                items.map((item: {
                            name: any;
                            artists: { name: any; }[];
                            images: { url: any; }[];
                }) => ({
                    name: item.name,
                    artist: item.artists[0].name,
                    image: item.images[0].url
                }))
            )
        };

        getRecomendations(token);
    }, [token]);

    return (
        <div className='homeContainer'>
            <h2>Hello!</h2>
            <section className="lastPlayed">
                {tracks.map(track => (
                    <SongItemPlayed
                        key = {track.name}
                        name = {track.name}
                        image = {track.image}
                    />
                ))}
            </section>
            <section>
                <h3>Some recomendations for you :)</h3>
                <div className="recomendations">
                    {recomendations.map(recomendations => (
                        <SongItemHome
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
                            <SongItemHome
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