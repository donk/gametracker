import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ownedGamesAtom } from "./atoms/ownedGames";
import { userInfoAtom } from "./atoms/auth";

import * as Firebase from "./services/Firebase";

import "./App.css";

import Sidebar from "./components/Sidebar";
import GameGrid from "./components/GameGrid";
import GamePage from "./pages/GamePage";

const AppFrame = styled.div`
  display: flex;
`;

const App = () => {
  const setOwnedGames = useSetRecoilState(ownedGamesAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const curTime = new Date().getTime();

  useEffect(() => {
    Firebase.anonymousSignin().then((data) => {
      setUserInfo({ id: data.user.uid });
      Firebase.getOwnedGames(data.user.uid).then((datas) => {
        if (datas.data()) {
          setOwnedGames(datas.data().owned);
        }
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <AppFrame>
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route key="home-page" path="/" exact>
              <GameGrid />
            </Route>
            <Route key="home-base" path="/games/page/" exact>
              <GameGrid />
            </Route>
            <Route key="home-paged" path="/games/page/:page" >
              <GameGrid />
            </Route>
            <Route key="upcoming" path="/games/upcoming/page/" exact>
              <GameGrid filter={`& first_release_date > ${Math.floor(curTime/1000)};`}/>
            </Route>
            <Route key="upcoming-paged" path="/games/upcoming/page/:page" exact>
              <GameGrid filter={`& first_release_date > ${Math.floor(curTime/1000)};`}/>
            </Route>
            <Route key="owned-games" path="/followed" exact>
              <GameGrid owned />
            </Route>
            <Route key="game-page" path="/game/:slug" exact>
              <GamePage />
            </Route>
          </Switch>
        </div>
      </AppFrame>
    </BrowserRouter>
  );
};

export default App;
