import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ParallaxImage = styled.div`
  background: ${props => props.src ? `url(${props.src})` : '#ccc'};
  height:400px;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(6px);
  -webkit-filter: blur(6px);
  box-shadow:inset 0 -100px 100px -100px rgba(0,0,0,1);
`;

const HeaderImage = (props) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    setImageUrl(props.src.replace('t_thumb','t_original'));
  },[props.src])

  return(
    <>
      <ParallaxImage src={imageUrl} />
    </>
  )
}

export default HeaderImage;