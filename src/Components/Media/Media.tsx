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

interface SequenceOptions {
  base: string;
  start: number;
  end: number;
  ext?: string;
  pad?: number;
}

type MediaInputItem = string | { sequence: SequenceOptions };

interface MediaProps extends Record<string, any> {
  media?: MediaInputItem[];
  src?: string | string[];
  sequence?: SequenceOptions;
  poster?: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  domainKey?: DomainKey;
  customDomain?: string;
}

const Media: React.FC<MediaProps> = (props) => {
  const {
    media,
    src,
    sequence,
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
        ❌ Error: Use only one of `customDomain` or a domainKey prop.
      </div>
    );
  }

  const baseDomain = useMemo(() => {
    return getDomainUrl(resolvedKey, customDomain);
  }, [resolvedKey, customDomain]);

  // Function to resolve one sequence block
  const resolveSequence = (opts: SequenceOptions): string[] => {
    const { base, start, end, ext = "png", pad = 0 } = opts;
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => {
      const index = (start + i).toString().padStart(pad, "0");
      return `${base}${index}.${ext}`;
    });
  };

  const resolvedMedia = useMemo(() => {
    let final: string[] = [];

    if (media && Array.isArray(media)) {
      for (const item of media) {
        if (typeof item === "string") {
          final.push(item);
        } else if ("sequence" in item) {
          final.push(...resolveSequence(item.sequence));
        }
      }
    } else {
      const srcArray = Array.isArray(src) ? src : src ? [src] : [];
      const seqArray = sequence ? resolveSequence(sequence) : [];
      final = [...srcArray, ...seqArray];
    }

    return final.map((url) => normalizeUrl(url, baseDomain));
  }, [media, src, sequence, baseDomain]);

  const isYouTubeLink = (url: string) =>
    /(youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);

  const images = resolvedMedia.filter(
    (file) => !/\.(mp4|webm|ogg)$/i.test(file) && !isYouTubeLink(file)
  );
  const videos = resolvedMedia.filter((file) =>
    /\.(mp4|webm|ogg)$/i.test(file)
  );
  const youtubeVideos = resolvedMedia.filter((file) => isYouTubeLink(file));

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
      {/* Videos */}
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

      {/* YouTube Videos */}
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
              >
                <RotateRightIcon />
              </IconButton>
              <IconButton
                onClick={() => onScale(scale + 0.2)}
                style={{ color: "white" }}
              >
                <ZoomInIcon />
              </IconButton>
              <IconButton
                onClick={() => onScale(scale - 0.2)}
                style={{ color: "white" }}
              >
                <ZoomOutIcon />
              </IconButton>
            </>
          )}
        >
          {images.map((imgSrc, index) => (
            <PhotoView key={`img-${index}`} src={imgSrc}>
              <img
                src={imgSrc}
                alt={alt}
                loading="lazy"
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
