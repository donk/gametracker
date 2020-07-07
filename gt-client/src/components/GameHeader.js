import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PlatformInfo from "./PlatformInfo";
import OwnedButton from "./OwnedButton";
import LaunchButton from "./LaunchButton";

const InfoFrame = styled.div`
  padding: 0 20px;
  width:100%;

  header {
    font-size: 2em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const GameHeader = (props) => {
  const [platforms, setPlatforms] = useState([]);
  const [steamLink, setSteamLink] = useState();

  useEffect(() => {
    if (props.game.platforms) setPlatforms(props.game.platforms);
    if (props.game.websites) {
      props.game.websites.forEach((site) => {
        if (site.category === 13) {
          // steam
          const steamID = site.url.split("/app/")[1];
          setSteamLink(steamID);
        }
      });
    }
  }, [props.game]);

  return (
    <InfoFrame>
      <header>
        {props.game.name}
        <OwnedButton style={{ float: "right" }} gameID={props.game.id} />
        {steamLink && (
          <LaunchButton
            style={{ float: "right" }}
            platform="Steam"
            id={steamLink}
          />
        )}
      </header>
      {platforms.map((platform) => (
        <PlatformInfo key={platform.id} platform={platform} />
      ))}
      <div>{props.game.summary}</div>
    </InfoFrame>
  );
};

export default GameHeader;
