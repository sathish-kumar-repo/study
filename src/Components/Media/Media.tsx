import React from "react";
import "./Media.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import IconButton from "@mui/material/IconButton";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

interface MediaProps {
  poster?: string | undefined;
  src: string | string[];
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const Media: React.FC<MediaProps> = ({
  src,
  alt = "Media content",
  className = "",
  width = "100%",
  height = "auto",
  poster,
}) => {
  const mediaArray = Array.isArray(src) ? src : [src];

  const isYouTubeLink = (url: string) =>
    /(youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);

  const images = mediaArray.filter(
    (file) => !/\.(mp4|webm|ogg)$/i.test(file) && !isYouTubeLink(file)
  );
  const videos = mediaArray.filter((file) => /\.(mp4|webm|ogg)$/i.test(file));
  const youtubeVideos = mediaArray.filter((file) => isYouTubeLink(file));

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }
    return url;
  };

  return (
    <div className={`media-container ${className}`}>
      {/* Render normal videos */}
      {videos.map((videoSrc, index) => (
        <video
          poster={poster}
          key={`video-${index}`}
          src={videoSrc}
          controls
          crossOrigin="anonymous"
          style={{ width, height }}
        />
      ))}

      {/* Render YouTube videos */}
      {youtubeVideos.map((ytSrc, index) => (
        <div className="video-wrapper" key={`yt-${index}`}>
          <iframe
            key={`yt-${index}`}
            src={getYouTubeEmbedUrl(ytSrc)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" //  picture-in-picture
            allowFullScreen
            title={`youtube-video-${index}`}
          ></iframe>
        </div>
      ))}

      {/* Render images */}
      {images.length > 0 && (
        <PhotoProvider
          toolbarRender={({ rotate, scale, onScale, onRotate }) => (
            <>
              <IconButton
                onClick={() => onRotate(rotate + 90)}
                style={{ color: "white" }}
                className="PhotoView-Slider__toolbarIcon"
              >
                <RotateRightIcon />
              </IconButton>
              <IconButton
                onClick={() => onScale(scale + 0.2)}
                style={{ color: "white" }}
                className="PhotoView-Slider__toolbarIcon"
              >
                <ZoomInIcon />
              </IconButton>
              <IconButton
                onClick={() => onScale(scale - 0.2)}
                style={{ color: "white" }}
                className="PhotoView-Slider__toolbarIcon"
              >
                <ZoomOutIcon />
              </IconButton>
            </>
          )}
        >
          {images.map((imgSrc, index) => (
            <PhotoView key={`image-${index}`} src={imgSrc}>
              <img
                src={imgSrc}
                alt={alt}
                style={{
                  width,
                  height,
                }}
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      )}
    </div>
  );
};

export default Media;
