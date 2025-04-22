import React from "react";
import "./Media.css";

interface MediaProps {
  src: string; // The src can be either a relative path (for public folder) or an imported path.
  alt?: string;
  className?: string;
}

const MediaDisplay: React.FC<MediaProps> = ({
  src,
  alt = "Media content",
  className = "",
}) => {
  // Dynamically determine the type based on file extension
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  return (
    <div className={`media-container ${className}`}>
      {isVideo ? (
        <video src={src} controls className="media-content" />
      ) : (
        <img src={src} alt={alt} className="media-content" />
      )}
    </div>
  );
};

export default MediaDisplay;
