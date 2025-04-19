import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  MouseEvent,
  TouchEvent,
} from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const Figure = styled.figure`
  min-width: 100px;
  height: 100%;
  background-position: 50% 50%;
  background-color: rgba(255, 255, 255, 0.05); /* subtle base */
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  cursor: zoom-in;
  position: relative;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  img {
    opacity: 0;
    transition: opacity 0s ease-in-out;
    border-radius: 16px;
  }

  &:before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #ffffffcc;
    border-right-color: #ffffffcc;
    border-bottom-color: #ffffffcc;
    animation: ${rotate} 2s linear infinite;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
  }

  &.loaded {
    img {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    &:before,
    &:after {
      opacity: 0;
    }
  }

  &.zoomed {
    cursor: zoom-out;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px) saturate(160%);
    transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  }
`;

// const Figure = styled.figure`
//   min-width: 100px;
//   height: 100%;
//   background-position: 50% 50%;
//   background-color: #eee;
//   overflow: hidden;
//   cursor: zoom-in;
//   position: relative;

//   img {
//     opacity: 0;
//     transition: opacity 0s ease-in-out;
//   }
//   &:before {
//     content: "";
//     background-color: transparent;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 1;
//     transition: opacity 0.2s ease-in-out;
//     z-index: 1;
//   }
//   &:after {
//     content: "";
//     position: absolute;
//     top: calc(50% - 25px);
//     left: calc(50% - 25px);
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     border: 5px solid transparent;
//     border-top-color: #333;
//     border-right-color: #333;
//     border-bottom-color: #333;
//     animation: ${rotate} 2s linear infinite;
//     opacity: 1;
//     transition: opacity 0.2s ease-in-out;
//     z-index: 2;
//   }
//   &.loaded {
//     min-height: auto;
//     img {
//       opacity: 1;
//       transition: opacity 0.2s ease-in-out;
//     }
//     &:before,
//     &:after {
//       opacity: 0;
//     }
//   }
// `;

const ErrorText = styled.p`
  width: 100%;
  text-align: center;
  border: 1px solid #f8f8f8;
  padding: 8px 16px;
  border-radius: 8px;
  color: #555;
`;

const Img = styled.img`
  transition: opacity 0.8s;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 6px;
`;

interface ImageZoomProps {
  zoom?: string | number;
  fullWidth?: boolean;
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: (e: Event) => void;
  errorContent?: React.ReactNode;
}

interface State {
  isZoomed: boolean;
  position: string;
  imgData: string | null;
  error: boolean;
  isOverflowHidden: boolean;
  naturalWidth: number;
  naturalHeight: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  zoom = "200",
  fullWidth = false,
  alt = "This is an imageZoom image",
  width = "100%",
  height = "auto",
  src,
  id,
  style,
  className = "",
  onError,
  errorContent = <ErrorText>There was a problem loading your image</ErrorText>,
}) => {
  const [state, setState] = useState<State>({
    isZoomed: false,
    position: "50% 50%",
    imgData: null,
    error: false,
    isOverflowHidden: false,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  const { position, imgData, error, isOverflowHidden } = state;

  const zoomInPosition = useCallback(
    (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
      const zoomer = e.currentTarget.getBoundingClientRect();
      let x = 50,
        y = 50;

      if ("touches" in e) {
        if (!isOverflowHidden) {
          setState((prev) => ({ ...prev, isOverflowHidden: true }));
          document.body.style.overflow = "hidden";
        }
        const touch = e.touches[0];
        x = ((touch.clientX - zoomer.x) / zoomer.width) * 100;
        y = ((touch.clientY - zoomer.y) / zoomer.height) * 100;
      } else {
        x = ((e.clientX - zoomer.x) / zoomer.width) * 100;
        y = ((e.clientY - zoomer.y) / zoomer.height) * 100;
      }

      setState((prev) => ({
        ...prev,
        position: `${Math.max(0, Math.min(x, 100))}% ${Math.max(
          0,
          Math.min(y, 100)
        )}%`,
      }));
    },
    [isOverflowHidden]
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
      setState((prev) => {
        const newIsZoomed = !prev.isZoomed;
        return {
          ...prev,
          isZoomed: newIsZoomed,
          ...(newIsZoomed && { position: prev.position }),
        };
      });
      if (!state.isZoomed) zoomInPosition(e);
    },
    [zoomInPosition, state.isZoomed]
  );

  const handleMove = useCallback(
    (e: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
      if (state.isZoomed) {
        zoomInPosition(e);
      }
    },
    [state.isZoomed, zoomInPosition]
  );

  const handleLeave = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isZoomed: false,
      position: "50% 50%",
      isOverflowHidden: false,
    }));
    document.body.style.overflow = "initial";
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, imgData: null }));

    if (!src) {
      throw new Error(
        "Prop src must be defined when using ImageZoom component!"
      );
    }

    const img = new Image();
    const handleLoad = () => {
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isZoomed: false,
          imgData: img.src,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        }));
      }, 200);
    };

    const handleErrorWrapper = (e: Event) => {
      setState((prev) => ({ ...prev, error: true }));
      onError?.(e);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleErrorWrapper);
    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleErrorWrapper);
    };
  }, [src, onError]);

  const calculateZoom = useMemo(() => {
    if (!fullWidth || !state.naturalWidth) return `${zoom}%`;

    const container = document.querySelector(".fullImageZoom");
    const containerWidth = container?.clientWidth || 0;
    if (!containerWidth) return `${zoom}%`;

    const zoomPercentage = (state.naturalWidth / containerWidth) * 100;
    return `${zoomPercentage < 100 ? zoom : zoomPercentage}%`;
  }, [zoom, fullWidth, state.naturalWidth]);

  const figureStyle = useMemo<React.CSSProperties>(
    () => ({
      backgroundImage: `url(${state.isZoomed && imgData ? imgData : ""})`,
      backgroundSize: calculateZoom,
      backgroundPosition: position,
      transition: state.isZoomed ? "none" : "background-position 0.3s ease",
    }),
    [state.isZoomed, imgData, calculateZoom, position]
  );

  if (error) return errorContent;

  return (
    <Figure
      id={id}
      className={`${imgData ? "loaded" : "loading"} ${
        state.isZoomed ? "zoomed" : "fullView"
      } ${className}`}
      style={{ ...figureStyle, ...style }}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchStart={handleClick}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
      role="button"
      aria-label={`Zoomable image: ${alt}`}
      tabIndex={0}
    >
      {imgData && (
        <Img
          loading="lazy"
          id="imageZoom"
          src={imgData}
          alt={alt}
          style={{ opacity: state.isZoomed ? 0 : 1 }}
          width={width}
          height={height}
        />
      )}
    </Figure>
  );
};

export default React.memo(ImageZoom);
