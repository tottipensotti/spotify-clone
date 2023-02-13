import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay);

interface SongItemHomeProps {
  name: string;
  artist: string;
  image: string;
}

const SongItemHome: React.FC<SongItemHomeProps> = ({ name, artist, image }) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div
      className="songContainerHome"
      onMouseOver={() => setShowIcon(true)}
      onMouseOut={() => setShowIcon(false)}
    >
      <img src={image} alt="" />
      {showIcon && (
        <div className="playHoverHome">
          <span>
            <FontAwesomeIcon icon="play" />
          </span>
        </div>
      )}
      <h4>{name}</h4>
      <p>{artist}</p>
    </div>
  );
};

export { SongItemHome };