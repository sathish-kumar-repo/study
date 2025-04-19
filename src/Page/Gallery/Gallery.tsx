import "./Gallery.css";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import groupedData from "../../utils/get_image";
import { Header } from "../../Components/Header/Header";
import { GlassDropdown } from "../../Components/GlassDropdown/GlassDropdown";
import { Footer } from "../../Components/Footer/Footer";
import { PlaceHolder } from "../../Components/Placeholder/PlaceHolder";
import ImageZoom from "../../Components/ImageZoom";
import RotateButtons from "../../Components/RotateButton";

type GalleryProps = {
  defaultSelectedFolder: string;
  onItemClick: (selectedFolder: string) => void;
};

const isDateFolder = (folderName: string): boolean =>
  /^\d{4}-\d{2}-\d{2}$/.test(folderName);

const Gallery = ({ onItemClick, defaultSelectedFolder }: GalleryProps) => {
  const folderKeys = Object.keys(groupedData());
  const [activeFolder, setActiveFolder] = useState<string>(
    defaultSelectedFolder
  );
  const [model, setModel] = useState(false);
  const [mediaSrc, setMediaSrc] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);
  const [rotation, setRotation] = useState(0);
  const [mediaFilter, setMediaFilter] = useState<"all" | "image" | "video">(
    "all"
  );
  const [sortRecentFirst, setSortRecentFirst] = useState(true);
  const [currentMediaList, setCurrentMediaList] = useState<
    { id: string; imgSrc: string; type: "image" | "video" }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const video = useRef<HTMLVideoElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // ----------- Modal Media Logic -----------

  const openModal = (mediaList: typeof currentMediaList, index: number) => {
    const selected = mediaList[index];
    setCurrentMediaList(mediaList);
    setCurrentIndex(index);
    setMediaSrc(selected.imgSrc);
    setMediaType(selected.type);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
    setMediaSrc(null);
    setMediaType(null);
    setCurrentIndex(-1);
    setCurrentMediaList([]);
    setRotation(0);
  };

  const showPrev = () => {
    setRotation(0);
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const item = currentMediaList[newIndex];
      setCurrentIndex(newIndex);
      setMediaSrc(item.imgSrc);
      setMediaType(item.type);
    }
  };

  const showNext = () => {
    setRotation(0);
    if (currentIndex < currentMediaList.length - 1) {
      const newIndex = currentIndex + 1;
      const item = currentMediaList[newIndex];
      setCurrentIndex(newIndex);
      setMediaSrc(item.imgSrc);
      setMediaType(item.type);
    }
  };

  const handleRotateLeft = () => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        diff > 0 ? showNext() : showPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // ---------- Effects ----------

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 420);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = model ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [model]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (video.current) {
        video.current.style.backgroundColor = document.fullscreenElement
          ? "transparent"
          : "rgba(255, 255, 255, 0.25)";
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!model) return;

    const glass = document.querySelector(".model-glass");

    const handleWheel = (e: WheelEvent) => {
      e.deltaY > 0 ? showNext() : showPrev();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };

    glass?.addEventListener("wheel", handleWheel as EventListener, {
      passive: true,
    });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      glass?.removeEventListener("wheel", handleWheel as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [model, currentIndex]);

  // ---------- Sorting Helper ----------

  const sortFoldersByTypeAndDate = (
    [a]: [string, any],
    [b]: [string, any],
    sortRecentFirst: boolean
  ) => {
    const isDateA = isDateFolder(a);
    const isDateB = isDateFolder(b);
    if (isDateA && isDateB) {
      return sortRecentFirst
        ? new Date(b).getTime() - new Date(a).getTime()
        : new Date(a).getTime() - new Date(b).getTime();
    }
    return sortRecentFirst ? (isDateA ? -1 : 1) : isDateA ? 1 : -1;
  };

  const sortedSubfolders = Object.entries(
    groupedData()[activeFolder] || {}
  ).sort((a, b) => sortFoldersByTypeAndDate(a, b, sortRecentFirst));

  // ---------- JSX ----------

  return (
    <div className="section full-page-layout">
      <Header
        activeFolder={activeFolder}
        onItemClick={(folder) => {
          setActiveFolder(folder);
          onItemClick(folder);
        }}
        list={folderKeys}
      />

      <div className="gallery-wrapper pi-container">
        {/* Modal Viewer */}
        <div className={model ? "model open" : "model"}>
          <div
            className="model-glass"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {mediaType === "image" && mediaSrc && (
              <ImageZoom
                src={mediaSrc}
                className="img"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            )}
            {mediaType === "video" && mediaSrc && (
              <video
                src={mediaSrc}
                controls
                autoPlay
                ref={video}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            )}

            <CloseIcon className="close-icon" onClick={closeModal} />
            <RotateButtons
              onRotateLeft={handleRotateLeft}
              onRotateRight={handleRotateRight}
            />

            {isDesktop && (
              <>
                <button
                  className="prev-button"
                  onClick={showPrev}
                  disabled={currentIndex <= 0}
                >
                  <ArrowBackIosNewIcon />
                </button>
                <button
                  className="next-button"
                  onClick={showNext}
                  disabled={currentIndex >= currentMediaList.length - 1}
                >
                  <ArrowForwardIosIcon />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="controls-glass">
          <div className="sort-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={sortRecentFirst}
                onChange={() => setSortRecentFirst((prev) => !prev)}
              />
              <span className="slider round" />
            </label>
            <span className="sort-label">
              {sortRecentFirst ? "Recently Added" : "Oldest First"}
            </span>
          </div>
          <div className="filters">
            <GlassDropdown
              options={["all", "image", "video"]}
              selected={mediaFilter}
              onChange={(val) => setMediaFilter(val as typeof mediaFilter)}
            />
            <div className="filter-buttons">
              {["all", "image", "video"].map((type) => (
                <button
                  key={type}
                  className={mediaFilter === type ? "active" : ""}
                  onClick={() => setMediaFilter(type as typeof mediaFilter)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="gallery-container">
          {sortedSubfolders.filter(([_, items]) =>
            items.some(
              (item) => mediaFilter === "all" || item.type === mediaFilter
            )
          ).length === 0 ? (
            <PlaceHolder />
          ) : (
            sortedSubfolders.map(([subfolder, mediaItems]) => {
              const filteredItems = mediaItems.filter(
                (item) => mediaFilter === "all" || item.type === mediaFilter
              );
              return (
                <div key={subfolder} className="date-section">
                  <h2 className="date-heading">{subfolder}</h2>
                  <div className="gallery">
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="pics"
                        onClick={() =>
                          openModal(
                            filteredItems.map((i) => ({
                              ...i,
                              id: i.id.toString(),
                            })),
                            filteredItems.findIndex((i) => i.id === item.id)
                          )
                        }
                      >
                        {item.type === "image" ? (
                          <img
                            src={item.imgSrc}
                            alt={`img-${item.id}`}
                            loading="lazy"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <>
                            <video
                              src={item.imgSrc}
                              preload="metadata"
                              style={{ width: "100%" }}
                            />
                            <div className="video-indicator">▶</div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
