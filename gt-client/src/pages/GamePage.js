import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { getGameBySlug } from "../api/GameAPI";

import HeaderImage from "../components/HeaderImage";
import CoverArt from '../components/CoverArt';
import GameHeader from '../components/GameHeader';
import MediaPanel from '../components/MediaPanel';

const randomImage = (images) => {
  return images[Math.floor(Math.random() * images.length)];
};

const ContentFrame = styled.div`
  background-color: #222;
  width: 100%;
  position: relative;

  .content {
    background-color: rgba(20,20,20,0.7);
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius:10px;
    transform:translateY(-50%);
  }

  .nobg{
    background-color:transparent;
  }
`;

const GamePage = (props) => {
  const [game, setGame] = useState({});
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setGame(location.state.game);
      console.log('getting game from props');
      console.log(location.state.game);
    } else {
      console.log('getting game by slug');
      getGameBySlug(params.slug).then((response) => {
        setGame(response);
      });
    }
  }, [location.state, params.slug]);

  return (
    <>
      {!game.screenshots && <div style={{ height: "400px" }} />}
      {game.screenshots && (
        <HeaderImage src={randomImage(game.screenshots).url} />
      )}
      <ContentFrame>
        <div className="content">
          <div className="flexxy">
            <CoverArt src={game.cover} />
            <GameHeader game={game} />
          </div>
        </div>
        <MediaPanel videos={game.videos} images={game.screenshots} artworks={game.artworks} />
      </ContentFrame>
    </>
  );
};

export default GamePage;
