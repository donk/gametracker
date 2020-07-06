import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllGames, getGamesByIDs } from "../api/GameAPI";
import { useRecoilState, useRecoilValue } from "recoil";
import { ownedGamesAtom } from "../atoms/ownedGames";
import { gameListCount } from '../atoms/filters';

import { NavLink, useParams } from "react-router-dom";

import GameCard from "./GameCard";
import FilterPanel from "./FilterPanel";

const Flexxy = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GameGrid = (props) => {
  const [gameList, setGameList] = useState([]);
  const ownedGames = useRecoilValue(ownedGamesAtom);
  const [listCount, setListCount] = useRecoilState(gameListCount);
  const params = useParams();

  const listPage = params.page || 1;

  useEffect(() => {
    // if nothing has been passed, load all games
    if (!props.owned) {
      // get all games
      getAllGames(listCount, (listPage - 1) * listCount)
        .then((response) => {
          console.log(response);
          setGameList(response);
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      if (ownedGames.length == 0) return;
      getGamesByIDs(ownedGames)
        .then((response) => {
          setGameList(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [listPage,listCount]);

  return (
    <>
      <Flexxy>
        <FilterPanel changeCount={setListCount} />
        {gameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Flexxy>
      <div>
        <NavLink to="/games/page/2">Go to page 2</NavLink>
      </div>
    </>
  );
};

export default GameGrid;

// 19561,10297,34823,119177,27266
