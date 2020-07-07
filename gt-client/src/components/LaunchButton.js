import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background-color: ${(props) => (props.isOwned ? "orange" : "#111")};
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  padding: 5px 10px;
  transition: background-color 0.2s;
  margin-right:10px;

  :hover {
    cursor: pointer;
    background-color: ${(props) => (props.isOwned ? "yellow" : "#444")};
  }
`;

const launchGame = (id) => {
  window.location = `steam://rungameid/${id}`
}

const LaunchButton = (props) => {
  return(
    <Button {...props} onClick={()=>launchGame(props.id)}>
      <span>
        Launch in {props.platform}
      </span>
    </Button>
  )
}

export default LaunchButton;