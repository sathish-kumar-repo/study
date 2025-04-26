import React from "react";
import "./Media.css";

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
          <img src={src} alt={alt} style={{ width, height }} />
        )}
      </div>
    </>
  );
};

export default Media;
