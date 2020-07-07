import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { getGameBySlug, getGamesByIDs } from "../api/GameAPI";
import Slider from "react-slick";
import moment from "moment";

import HeaderImage from "../components/HeaderImage";
import CoverArt from "../components/CoverArt";
import GameHeader from "../components/GameHeader";
import MediaPanel from "../components/MediaPanel";
import GameCard from "../components/GameCard";
import InfoCard from "../components/InfoCard";

const randomImage = (images) => {
  return images[Math.floor(Math.random() * images.length)];
};

const ContentFrame = styled.div`
  width: 100%;
  position: relative;

  .game-info {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20;
    display: flex;
    flex-wrap: wrap;
  }

  .content {
    background-color: rgba(0, 0, 0, 0.3);
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .content .flexxy {
    background-color: rgba(20, 20, 20, 0.7);
    border-radius: 10px;
    margin-top: -125px;
    padding: 20px;
  }

  .nobg {
    background-color: transparent;
  }

  h3 {
    margin-top: 0;
  }
`;

function pad(num) {
  return ("0" + num).slice(-2);
}
function hhmmss(secs) {
  var minutes = Math.floor(secs / 60);
  secs = secs % 60;
  var hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${pad(hours)}h ${pad(minutes)}m`;
  // return pad(hours)+":"+pad(minutes)+":"+pad(secs); for old browsers
}

const GamePage = (props) => {
  const [game, setGame] = useState({});
  const [similarGames, setSimilarGames] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setGame(location.state.game);
      console.log(location.state.game);
    } else {
      getGameBySlug(params.slug).then((response) => {
        setGame(response);
        console.log(response);
      });
    }
  }, [location.state, params.slug]);

  useEffect(() => {
    if (game.similar_games) {
      getGamesByIDs(game.similar_games, true).then((response) => {
        setSimilarGames(response);
      });
    }
    if (game.involved_companies) {
      const devs = game.involved_companies.filter((company) => {
        return company.developer || company.supporting;
      });
      const pubs = game.involved_companies.filter((company) => {
        return company.publisher;
      });
      setDevelopers(devs);
      setPublishers(pubs);
    }
  }, [game]);

  return (
    <>
      {!game.screenshots && <div style={{ height: "400px" }} />}
      {game.screenshots && (
        <HeaderImage src={randomImage(game.screenshots).url} />
      )}
      <ContentFrame>
        <div className="content" style={{ backgroundColor: "transparent" }}>
          <div className="flexxy">
            <CoverArt src={game.cover} />
            <GameHeader game={game} />
          </div>
        </div>

        <div className="game-info">
          <InfoCard title="Released">
            {moment.unix(game.first_release_date).format("MM/DD/YYYY")}
          </InfoCard>

          <InfoCard title="Developers">
            {developers.map((devs, idx) => {
              return (
                <div key={idx}>
                  {devs.company.websites && (
                    <a href={devs.company.websites[0].url} target="_blank" rel="noopener noreferrer">
                      <div>{devs.company.name}</div>
                    </a>
                  )}
                  {!devs.company.websites && <div>{devs.company.name}</div>}
                </div>
              );
            })}
          </InfoCard>

          <InfoCard title="Publishers">
            {publishers.map((pubs, idx) => {
              return (
                <div key={idx}>
                  {pubs.company.websites && (
                    <a href={pubs.company.websites[0].url} target="_blank" rel="noopener noreferrer">
                      <div>{pubs.company.name}</div>
                    </a>
                  )}
                  {!pubs.company.websites && (
                    <div key={idx}>{pubs.company.name}</div>
                  )}
                </div>
              );
            })}
          </InfoCard>

          {game.game_modes && (
            <InfoCard title="Game Modes">
              {game.game_modes.map((gamemode, idx) => {
                return <div key={idx}>{gamemode.name}</div>;
              })}
            </InfoCard>
          )}

          {game.genres && (
            <InfoCard title="Genres">
              {game.genres.map((genre, idx) => {
                return <div key={idx}>{genre.name}</div>;
              })}
            </InfoCard>
          )}

          {
            // There's got to be a better way to do this...
          }
          {game.time_to_beat && (
            <InfoCard title="Time to beat">
              {game.time_to_beat.normally > 0 && (
                <div>Normally: {hhmmss(game.time_to_beat.normally)}</div>
              )}
              {game.time_to_beat.hastly > 0 && (
                <div>Hastily: {hhmmss(game.time_to_beat.hastly)}</div>
              )}
              {game.time_to_beat.completely > 0 && (
                <div>Completely: {hhmmss(game.time_to_beat.completely)}</div>
              )}
            </InfoCard>
          )}

          {game.themes && (
            <InfoCard title="Themes">
              {game.themes.map((theme, idx) => {
                return <div key={idx}>{theme.name}</div>;
              })}
            </InfoCard>
          )}
        </div>

        <MediaPanel
          videos={game.videos}
          images={game.screenshots}
          artworks={game.artworks}
        />

        <div
          className="content"
          style={{ transform: "none", marginTop: "20px" }}
        >
          <h3>Similar Games</h3>
          <Slider
            dots={true}
            infinite={false}
            slidesToShow={6}
            slidesToScroll={1}
          >
            {similarGames &&
              similarGames.map((sGame, idx) => {
                return (
                  <div key={idx}>
                    <GameCard game={sGame} />
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
