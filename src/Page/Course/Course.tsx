import "./Course.css";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import ImageZoom from "../../components/ImageZoom";
import RotateButtons from "../../components/RotateButton";
import { NavLink, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import course from "../../data/course_data";
import { formatName, toTitleCase } from "../../utils/custom_string";
import Section from "../../components/Section";
import Container from "../../components/Container";

const Course = () => {
  const [model, setModel] = useState(false);
  const [mediaSrc, setMediaSrc] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);
  const [rotation, setRotation] = useState(0);

  const video = useRef<HTMLVideoElement | null>(null);

  // ----------- Modal Media Logic -----------

  const openModal = () => {
    setModel(true);
    setMediaSrc("");
    setMediaType(null);
  };

  const closeModal = () => {
    setModel(false);
    setRotation(0);
  };

  const handleRotateLeft = () => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // ---------- Effects ----------

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

    // const glass = document.querySelector(".model-glass");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [model]);

  const { category } = useParams();
  const isValidFolder = category && course[category];

  if (!isValidFolder) {
    return <NotFound />;
  }

  const categoryCourses = course[category as keyof typeof course];

  return (
    <Section className="course-section">
      <Header />
      <Container className="course-wrapper">
        <h1 className="course-heading">{toTitleCase(formatName(category))} </h1>

        <div className={model ? "model open" : "model"}>
          <div className="model-glass">
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
          </div>
        </div>

        <div key={category} className="course-list">
          {categoryCourses.map((item, index) => (
            <div key={index} className="course-card">
              <img src={item.img} alt={item.name} className="course-img" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              {/* /${category}/${item.link}` */}
              <NavLink to={`${item.link}`} className="course-link">
                Learn More
              </NavLink>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </Section>
  );
};

export default Course;
