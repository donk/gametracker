import React from 'react';
import styled from 'styled-components';

const InfoPanel = styled.div`
  margin:5px 15px;
  font-size:0.9em;
  .info-title{
    text-transform:uppercase;
    color:rgba(255,255,255,0.3);
    font-size:0.8em;
  }
  a{
    color:rgba(255,255,255,0.8);
    text-decoration:none;
    transition:color 0.2s;
    &:hover{
      color:white;
    }
  }
`;

const InfoCard = (props) => {
  return (
    <InfoPanel>
      <div className="info-title">{props.title}</div>
      <div>{props.children}</div>
    </InfoPanel>
  )
}

export default InfoCard;