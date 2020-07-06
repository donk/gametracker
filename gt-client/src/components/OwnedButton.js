import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ownedGamesAtom } from "../atoms/ownedGames";
import { userInfoAtom } from '../atoms/auth';
import styled from "styled-components";

import * as Firebase from "../services/Firebase";

import { removeItem, findItem, updateItem } from "../util/array";


const Button = styled.div`
  background-color: ${(props) => (props.isOwned ? "orange" : "#111")};
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  padding: 5px 10px;
  transition: background-color 0.2s;

  :hover {
    cursor: pointer;
    background-color: ${(props) => (props.isOwned ? "yellow" : "#444")};
  }
`;

const OwnedButton = (props) => {
  const [isOwned, setIsOwned] = useState(false);
  const [gameList, setGameList] = useRecoilState(ownedGamesAtom);
  const userRecoil = useRecoilValue(userInfoAtom);


  const removeOwned = (id) => {
    const newList = removeItem(gameList, { id: id });
    Firebase.setOwnedGames(userRecoil.id,newList);
    setGameList(newList);
  };

  const addOwned = (id) => {
    const newList = updateItem(gameList, { id: id, owned: true });
    Firebase.setOwnedGames(userRecoil.id,newList);
    setGameList(newList);
  };

  useEffect(() => {
    console.log(gameList);
    const currentGame = findItem(gameList, { id: props.gameID }, "id");
    if (currentGame) setIsOwned(currentGame.owned);
  }, [props.gameID]);

  const toggleOwned = () => {
    if (!isOwned) {
      addOwned(props.gameID);
    } else {
      removeOwned(props.gameID);
    }
    setIsOwned(!isOwned);
  };

  return (
    <Button {...props} isOwned={isOwned} onClick={toggleOwned}>
      {isOwned && <span>Following</span>}
      {!isOwned && <span>Follow</span>}
    </Button>
  );
};

export default OwnedButton;
