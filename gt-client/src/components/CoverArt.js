import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CoverPlaceholder = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 267px;
`;

const CoverArt = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();

  useEffect(() => {
    if (!props.src) return;
    setImage(props.src.url.replace("t_thumb", "t_cover_big"));
    setIsLoading(false);
  }, [props.src]);

  return (
    <>
      {isLoading && <CoverPlaceholder className="cover-art" />}
      {!isLoading && (
        <img
          className="cover-art"
          src={image}
          width="200"
          height="267"
          alt="cover art"
        />
      )}
    </>
  );
};

export default CoverArt;
