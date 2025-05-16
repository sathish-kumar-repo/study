import React, { useMemo } from "react";
import "./Media.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import IconButton from "@mui/material/IconButton";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";

import {
  getDomainUrl,
  normalizeUrl,
  resolveDomainKeyFromProps,
  DomainKey,
} from "../../utils/domain";

interface SequenceConfig {
  base: string;
  start: number;
  end: number;
  ext: string;
}

interface MediaProps extends Record<string, any> {
  poster?: string;
  src?: string | string[];
  sequence?: SequenceConfig | SequenceConfig[];
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  domainKey?: DomainKey;
  customDomain?: string;
}

const Media: React.FC<MediaProps> = (props) => {
  const {
    src,
    sequence = [],
    alt = "Media content",
    className = "",
    width = "100%",
    height = "auto",
    poster,
    domainKey: directKey,
    customDomain,
  } = props;

  const resolvedKey = resolveDomainKeyFromProps(props) || directKey;

  if (customDomain && resolvedKey) {
    return (
      <div className="media-container error-message">
        ❌ Error: Use only one of `customDomain` or a boolean domain flag like
        `a`, `b`, `c`.
      </div>
    );
  }

  const baseDomain = useMemo(() => {
    return getDomainUrl(resolvedKey, customDomain);
  }, [resolvedKey, customDomain]);

  const sequenceFiles: string[] = useMemo(() => {
    const seqArray = Array.isArray(sequence) ? sequence : [sequence];
    return seqArray.flatMap(({ base, start, end, ext }) =>
      Array.from(
        { length: end - start + 1 },
        (_, i) => `${base}/${start + i}.${ext}`
      )
    );
  }, [sequence]);

  const allSources = useMemo(() => {
    const srcArray = src ? (Array.isArray(src) ? src : [src]) : [];
    const combined = [...srcArray, ...sequenceFiles];
    return combined.map((url) => normalizeUrl(url, baseDomain));
  }, [src, sequenceFiles, baseDomain]);

  const isYouTubeLink = (url: string) =>
    /(youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);

  const images = allSources.filter(
    (file) =>
      !/\.(mp4|webm|ogg|mp3|wav|m4a)$/i.test(file) && !isYouTubeLink(file)
  );
  const videos = allSources.filter((file) => /\.(mp4|webm|ogg)$/i.test(file));
  const audios = allSources.filter((file) => /\.(mp3|wav|m4a)$/i.test(file));
  const youtubeVideos = allSources.filter((file) => isYouTubeLink(file));

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
      {/* Normal videos */}
      {videos.map((videoSrc, index) => (
        <video
          key={`video-${index}`}
          src={videoSrc}
          poster={poster}
          controls
          crossOrigin="anonymous"
          style={{ width, height }}
        />
      ))}

      {/* Audio files */}
      {audios.map((audioSrc, index) => (
        <audio
          key={`audio-${index}`}
          src={audioSrc}
          controls
          style={{ width }}
        />
      ))}

      {/* YouTube videos */}
      {youtubeVideos.map((ytSrc, index) => (
        <div className="video-wrapper" key={`yt-${index}`}>
          <iframe
            src={getYouTubeEmbedUrl(ytSrc)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
            title={`youtube-video-${index}`}
          />
        </div>
      ))}

      {/* Images */}
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
                loading="lazy"
                style={{ width, height }}
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      )}
    </div>
  );
};

export default Media;
