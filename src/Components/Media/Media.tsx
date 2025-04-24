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
  const [rotation, setRotation] = useState(0);

  // Dynamically determine the type based on file extension
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleRotateLeft = () => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotation((prev) => (prev + 90) % 360);
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

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isVideo ? (
              <video src={src} controls className="modal-video" />
            ) : (
              <ImageZoom src={src} />
              // <img src={src} alt={alt} className="modal-image zoomable" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Media;
