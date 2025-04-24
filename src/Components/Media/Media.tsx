import React, { useState } from "react";
import "./Media.css";
import ImageZoom from "../ImageZoom";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamically determine the type based on file extension
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={`media-container ${className}`} onClick={toggleModal}>
        {isVideo ? (
          <video
            src={src}
            controls
            className="media-content"
            style={{ width, height }}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="media-content"
            style={{ width, height }}
          />
        )}
      </div>

      <div
        className={`modal-overlay ${isModalOpen ? "open" : undefined}`}
        onClick={toggleModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {isVideo ? (
            <video src={src} controls autoPlay className="modal-video" />
          ) : (
            <ImageZoom src={src} />
          )}
        </div>
      </div>
    </>
  );
};

export default Media;
