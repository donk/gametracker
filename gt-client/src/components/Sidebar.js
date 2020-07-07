import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ownedGamesAtom } from "../atoms/ownedGames";

const SidebarFrame = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #333;
  overflow-x: hidden;

  .content {
    position: block;
  }
`;

const navStyles = `
  text-decoration: none;
  color:white;
  display:block;
  text-align:center;
  padding:10px 0;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }

  &:hover{
    background-color:rgba(255,255,255,0.2);
    cursor:pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${navStyles}
`;
const StyledNavButton = styled.div`
  ${navStyles}
  padding:15px 0;
  border-bottom: #000 1px solid;
  background-color: #2a2a2a;
`;

const activeStyle = {
  color: "orange",
  fontWeight: "bold",
};

const Sidebar = (props) => {
  const ownedList = useRecoilValue(ownedGamesAtom);

  return (
    <SidebarFrame>
      <div className="content">
        {false && <StyledNavButton>Login to sync</StyledNavButton>}
        <StyledNavLink to="/games/page/" activeStyle={activeStyle}>
          All Games
        </StyledNavLink>
        <StyledNavLink
          to="/games/upcoming/page/"
          activeStyle={activeStyle}
        >
          Upcoming Games
        </StyledNavLink>
        <StyledNavLink to="/followed" activeStyle={activeStyle}>
          Followed Games 
          {ownedList.length > -1 && (
            <span style={{ fontSize: "14px" }}> ({ ownedList.length})</span>
          )}
        </StyledNavLink>
      </div>
    </SidebarFrame>
  );
};

export default Sidebar;
