import React from 'react';
import { SideBar } from './components/SideBar';
import { HomeScreen } from './components/HomeScreen';
import { PlayerControl } from './components/PlayerControl';

function AppUI ({ token }) {
    return (
        <React.Fragment>
            <SideBar token={token} />
            <HomeScreen token={token} />
            <PlayerControl token={token}/>
        </React.Fragment>
    )
}

export { AppUI };