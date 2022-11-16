import React from "react";
import "./VideosPage.scss";
import titleVideos from "../../assets/img/videos-title.png"
import logoNengo from "../../assets/img/rg4l-logo.png";


const VideosPage = () => {
  return (
    <div className="videos-page">
      <div className="videos-page-bar"></div>
      <img src={titleVideos} alt="title-videos" className="videos-page-title" />
      <div className="videos-page-youtube">

        <iframe
        className="videos-page-iframes"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YCaQA3MNKAE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
        className="videos-page-iframes"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xsg5UNc1fJ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

<img src={logoNengo} alt="logo-nengo" className="videos-page-logo" />
    </div>
  );
};

export default VideosPage;
