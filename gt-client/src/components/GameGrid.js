import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllGames, getGamesByIDs } from "../api/GameAPI";
import { useRecoilState, useRecoilValue } from "recoil";
import { ownedGamesAtom } from "../atoms/ownedGames";
import { userInfoAtom } from "../atoms/auth";
import { gameListCount } from "../atoms/filters";

import * as Firebase from "../services/Firebase";

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
  const userInfo = useRecoilValue(userInfoAtom);
  const [listCount, setListCount] = useRecoilState(gameListCount);
  const [platforms, setPlatforms] = useState([""]);

  const params = useParams();

  const listPage = params.page || 1;


  const doChangeCount = (count) => {
    setListCount(count);
    Firebase.setFilterCount(userInfo.id, count);
  };

  const doChangePlatforms = (platforms) => {
    setPlatforms(platforms);
    Firebase.setFilterPlatforms(userInfo.id,platforms);
  };

  useEffect(() => {
    if (!userInfo.id) return;
    Firebase.getFilters(userInfo.id)
      .then((data) => {
        setListCount(data.data().listCount);
        const fbPlatforms = data.data().platforms;
        if (fbPlatforms)
          setPlatforms(fbPlatforms);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userInfo]);

  useEffect(() => {
    if (!props.owned) {
      getAllGames(listCount, (listPage - 1) * listCount, platforms, props.filter)
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
  }, [listPage, listCount,platforms]);

  return (
    <>
      <Flexxy>
        <FilterPanel
          changeCount={doChangeCount}
          count={listCount}
          changePlatforms={doChangePlatforms}
          platforms={platforms}
        />
        {gameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Flexxy>
      <div>
        <NavLink to={`/games/page/${parseInt(listPage) - 1}`}>
          Last Page
        </NavLink>
        <NavLink to={`/games/page/${parseInt(listPage) + 1}`}>
          Next Page
        </NavLink>
      </div>
    </>
  );
};

export default GameGrid;

// 19561,10297,34823,119177,27266
