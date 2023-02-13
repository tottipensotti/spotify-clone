import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay);

interface SongItemPlayedProps {
  name: string;
  image: string;
}

const SongItemPlayed: React.FC<SongItemPlayedProps> = ({ name, image }) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div
      className="songContainer"
      onMouseOver={() => setShowIcon(true)}
      onMouseOut={() => setShowIcon(false)}
    >
      <img src={image} alt="" />
      {showIcon && (
        <div className="playHover">
          <span>
            <FontAwesomeIcon icon="play" />
          </span>
        </div>
      )}
      <h4>{name}</h4>
    </div>
  );
};

export { SongItemPlayed };