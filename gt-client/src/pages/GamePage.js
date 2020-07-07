import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { getGameBySlug, getGamesByIDs } from "../api/GameAPI";
import Slider from "react-slick";

import HeaderImage from "../components/HeaderImage";
import CoverArt from "../components/CoverArt";
import GameHeader from "../components/GameHeader";
import MediaPanel from "../components/MediaPanel";
import GameCard from "../components/GameCard";

const randomImage = (images) => {
  return images[Math.floor(Math.random() * images.length)];
};

const ContentFrame = styled.div`
  background-color: #222;
  width: 100%;
  position: relative;

  .content {
    background-color: rgba(20, 20, 20, 0.7);
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    transform: translateY(-50%);
  }

  .nobg {
    background-color: transparent;
  }
`;

const GamePage = (props) => {
  const [game, setGame] = useState({});
  const [similarGames, setSimilarGames] = useState([]);
  const [similarCount,setSimilarCount] = useState(3);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setGame(location.state.game);
      console.log("getting game from props");
      console.log(location.state.game);
    } else {
      console.log("getting game by slug");
      getGameBySlug(params.slug).then((response) => {
        setGame(response);
      });
    }
  }, [location.state, params.slug]);

  useEffect(() => {
    if (game.similar_games) {
      getGamesByIDs(game.similar_games, true).then((response) => {
        setSimilarGames(response);
      
      });
    }
  }, [game]);

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
        <MediaPanel
          videos={game.videos}
          images={game.screenshots}
          artworks={game.artworks}
        />
        <div className="content" style={{transform:'none'}}>
          Similar Games
          <Slider dots={true} infinite={false} slidesToShow={6} slidesToScroll={1}>
            {similarGames &&
              similarGames.map((sGame, idx) => {
                return (
                  <div>
                    <GameCard key={idx} game={sGame} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </ContentFrame>
    </>
  );
};

export default GamePage;
