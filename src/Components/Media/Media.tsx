import React from "react";
import "./Media.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import IconButton from "@mui/material/IconButton";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";

interface MediaProps {
  src: string;
  alt?: string;
  className?: string;
  width?: string | number; // Optional width
  height?: string | number; // Optional height
}

const Media: React.FC<MediaProps> = ({
  src,
  alt = "Media content",
  className = "",
  width = "100%",
  height = "auto",
}) => {
  // Dynamically determine the type based on file extension
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  return (
    <>
      <div className={`media-container ${className}`}>
        {isVideo ? (
          <video
            src={src}
            className="media-content"
            controls
            style={{ width, height }}
          />
        ) : (
          <PhotoProvider
            toolbarRender={({ rotate, scale, onScale, onRotate }) => (
              <div>
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
              </div>
            )}
          >
            <PhotoView src={src}>
              <img src={src} alt={alt} style={{ width, height }} />
            </PhotoView>
          </PhotoProvider>
        )}
      </div>
    </>
  );
};

export default Media;
//
