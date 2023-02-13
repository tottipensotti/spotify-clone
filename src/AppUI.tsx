import React from 'react';
import { SideBar } from './components/SideBar';
import { HomeScreen } from './components/HomeScreen';
import { PlayerControl } from './components/PlayerControl';

interface AppUIProps {
  token: string;
}

const AppUI: React.FC<AppUIProps> = ({ token }) => {
  return (
    <React.Fragment>
      <SideBar token={token} />
      <HomeScreen token={token} />
      <PlayerControl token={token} />
    </React.Fragment>
  );
};

export { AppUI };