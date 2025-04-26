import React from "react";
import "./Media.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import IconButton from "@mui/material/IconButton";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

interface MediaProps {
  src: string | string[]; // Accept string or array of strings
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
}) => {
  const renderMedia = (file: string, index: number) => {
    const isVideo = /\.(mp4|webm|ogg)$/i.test(file);
    if (isVideo) {
      return (
        <video
          key={index}
          src={file}
          className="media-content"
          controls
          style={{ width, height }}
        />
      );
    } else {
      return (
        <PhotoView key={index} src={file}>
          <img src={file} alt={alt} style={{ width, height }} />
        </PhotoView>
      );
    }
  };

  const mediaArray = Array.isArray(src) ? src : [src];

  return (
    <div className={`media-container ${className}`}>
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
        {mediaArray.map((file, index) => renderMedia(file, index))}
      </PhotoProvider>
    </div>
  );
};

export default Media;
