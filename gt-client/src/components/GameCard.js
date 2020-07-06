import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PlatformInfo from './PlatformInfo';

const CardFrame = styled.div`
  position: relative;
  margin: 3px;

  img {
    display: inline-block;
  }

  :hover {
    cursor: pointer;
  }
`;

const GameCard = (props) => {
  const [cover, setCover] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(Math.round(props.game.total_rating));
    if (props.game.cover)
      setCover(props.game.cover.url.replace("t_thumb", "t_original"));
  }, [props.game]);

  return (
    <Link to={{
        pathname:`/games/${props.game.slug}`,
        state:{game:props.game}
    }}>
      <CardFrame className="game__card">
        <img src={cover} height="275" alt={`${props.game.name} cover art`}/>
        <div className="game__platforms">
          <div className="game__platforms-content">
            {props.game.platforms && props.game.platforms.map((platform) => (
              <PlatformInfo key={platform.id} platform={platform} size={12} />
            ))}
          </div>
        </div>
        <div className="game__info">
          <div className="game__info-content">
            <div className="title">{props.game.name}</div>
            <div style={{ fontSize: "10px" }}>
              {props.game.genres && props.game.genres.map((genre) => (
                <span key={genre.id}>{genre.name + ", "}</span>
              ))}
            </div>
            <div style={{ padding: "5px 0" }}>Rating: {rating}/100</div>
          </div>
        </div>
      </CardFrame>
    </Link>
  );
};

export default GameCard;
