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
  ext?: string;
  leadingZeros?: number;
  pattern?: string; // e.g., "img_${n}.jpg"
}

type MediaEntry = string | { sequence: SequenceConfig };

interface MediaProps extends Record<string, any> {
  poster?: string;
  src?: string | string[];
  sequence?: SequenceConfig | SequenceConfig[];
  media?: MediaEntry[]; // ✅ new mixed format
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  domainKey?: DomainKey;
  customDomain?: string;
  sort?: boolean; // whether to sort final media list
}

const padNumber = (num: number, width: number): string =>
  num.toString().padStart(width, "0");

const generateSequenceUrls = (
  config: SequenceConfig,
  domain: string
): string[] => {
  const { base, start, end, ext = "jpg", leadingZeros = 0, pattern } = config;
  const list: string[] = [];

  for (let i = start; i <= end; i++) {
    const n = leadingZeros > 0 ? padNumber(i, leadingZeros) : i.toString();
    const filename = pattern ? pattern.replace("${n}", n) : `${n}.${ext}`;
    list.push(normalizeUrl(`${base}${filename}`, domain));
  }

  return list;
};

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
    sort = true,
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

  const mediaArray = useMemo(() => {
    let list: string[] = [];

    const fromMedia =
      media?.flatMap((entry) => {
        if (typeof entry === "string") {
          return [normalizeUrl(entry, baseDomain)];
        } else if ("sequence" in entry) {
          return generateSequenceUrls(entry.sequence, baseDomain);
        }
        return [];
      }) ?? [];

    const fromSrc = Array.isArray(src) ? src : src ? [src] : [];
    const fromSeq = sequence
      ? Array.isArray(sequence)
        ? sequence
        : [sequence]
      : [];

    const fromSrcUrls = fromSrc.map((url) => normalizeUrl(url, baseDomain));
    const fromSeqUrls = fromSeq.flatMap((conf) =>
      generateSequenceUrls(conf, baseDomain)
    );

    list = [...fromMedia, ...fromSrcUrls, ...fromSeqUrls];
    return sort ? list.sort() : list;
  }, [media, src, sequence, baseDomain, sort]);

  const isYouTubeLink = (url: string) =>
    /(youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);
  const isAudio = (file: string) => /\.(mp3|wav|ogg)$/i.test(file);
  const isVideo = (file: string) =>
    /\.(mp4|webm|ogg)$/i.test(file) && !isAudio(file);

  const images = mediaArray.filter(
    (file) => !isVideo(file) && !isAudio(file) && !isYouTubeLink(file)
  );
  const videos = mediaArray.filter((file) => isVideo(file));
  const audios = mediaArray.filter((file) => isAudio(file));
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

      {/* YouTube */}
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

      {/* Audios */}
      {audios.map((audioSrc, index) => (
        <audio
          key={`audio-${index}`}
          src={audioSrc}
          controls
          crossOrigin="anonymous"
          style={{ width }}
        />
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
