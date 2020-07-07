import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const SliderFrame = styled.div`
  white-space: nowrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;

  .slick-dots li button::before {
    color: white;
  }

  h2 {
    margin-top: 2em;
  }

  .video-container iframe{
    width:940px;
    height:529px;
  }

  .slick-track{
    display: flex;

    .slick-slide{
      display: flex;
      height: auto;
      align-items: center; 
      justify-content: center; 
      transition:opacity 0.3s;
    }

    .slick-slide:not(.slick-active){
      opacity:0.5;
    }
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2>Media</h2>
      </div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          padding: "10px",
          paddingBottom: "25px",
        }}
      >
        <SliderFrame>
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            variableWidth={true}
            centerMode={true}
          >
            {videos && videos.map((video) => {
              const url = `https://www.youtube.com/embed/${video.video_id}`;
              return (
                <div className="video-container" key={video.video_id}>
                  <iframe allowFullScreen={true} src={url} frameBorder="0" height="100%"></iframe>
                </div>
              );
            })}
            {artworks && artworks.map((artwork) => {
              const url = artwork.url.replace("t_thumb", "t_screenshot_big");
              return <img key={artwork.id} src={url} />;
            })}
            {images && images.map((image) => {
              const url = image.url.replace("t_thumb", "t_screenshot_big");
              return <img key={image.id} src={url} />;
            })}
          </Slider>
        </SliderFrame>
      </div>
    </>
  );
};

export default MediaPanel;
