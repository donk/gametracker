import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SliderFrame = styled.div`
  white-space: nowrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  overflow: hidden;

  h2 {
    margin-top: 2em;
  }

  .video-container {
    position: relative;
    display:inline-block;
    width:534px;
    height:300px;
    margin:5px;
  }

  .video-container iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    display: inline-block;
    margin: 5px;
  }
`;

const MediaPanel = (props) => {
  const [images, setImages] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (props.images) setImages(props.images);
    if (props.artworks) setArtworks(props.artworks);
    if (props.videos) setVideos(props.videos);
  }, [props.images, props.artworks]);

  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "-75px" }}>
        <h2>Media</h2>
      </div>
      <div style={{ backgroundColor: "rgba(0,0,0,0.3)", padding: "10px" }}>
        <SliderFrame>
        <div>
          {videos.map((video) => {
            const url = `https://www.youtube.com/embed/${video.video_id}`;
            return (
              <div key={video.id} className="video-container">
                <iframe
                  src={url}
                  frameBorder="0"
                ></iframe>
              </div>
            );
          })}
          {artworks.map((artwork) => {
            const url = artwork.url.replace("t_thumb", "t_original");
            return <img key={artwork.id} src={url} height="300" />;
          })}
          {images.map((image) => {
            const url = image.url.replace("t_thumb", "t_original");
            return <img key={image.id} src={url} height="300" />;
          })}
          </div>
        </SliderFrame>
      </div>
    </>
  );
};

export default MediaPanel;
