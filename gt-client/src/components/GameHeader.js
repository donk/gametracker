import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PlatformInfo from "./PlatformInfo";
import OwnedButton from './OwnedButton';

const InfoFrame = styled.div`
  padding: 0 20px;

  header {
    font-size: 2em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    font-weight: bold;
    margin-bottom:5px;
  }
`;

const GameHeader = (props) => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    if (!props.game.platforms) return;
    setPlatforms(props.game.platforms);
  },[props.game])

  return (
    <InfoFrame>
      <header>
        {props.game.name}
        <OwnedButton style={{float:'right'}} gameID={props.game.id}/>
      </header>
      {platforms.map((platform) => ( 
        <PlatformInfo key={platform.id} platform={platform} />
      ))}
      <div>
        {props.game.summary}
      </div>
    </InfoFrame>
  );
};

export default GameHeader;
