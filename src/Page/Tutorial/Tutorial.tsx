import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./Tutorial.css";
import { ContentDataType } from "../../model/content_model";
import { capitalizeFirstLetter } from "../../utils/custom_string";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Helmet } from "react-helmet";

interface TutorialProps {
  contentData: ContentDataType;
}

const Tutorial = ({ contentData }: TutorialProps) => {
  const { category } = useParams();
  const [showTopic, setShowTopic] = useState(false);
  const offCanvasRef = useRef<HTMLDivElement>(null);
  const activeTopicRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  const getCurrenttopic = (): string => {
    const url = window.location.href;
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split("/");
    const encodedValue = pathSegments[pathSegments.length - 1];
    return decodeURIComponent(encodedValue);
  };

  const [currentTopic, setCurrentTopic] = useState(getCurrenttopic());

  useEffect(() => {
    // Close the topic menu when clicking outside
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        showTopic &&
        offCanvasRef.current &&
        !offCanvasRef.current.contains(event.target as Node)
      ) {
        setShowTopic(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTopic]);

  useEffect(() => {
    // Scroll to the active topic whenever the current topic changes
    if (activeTopicRef.current) {
      console.log("Scrolling to active topic:", activeTopicRef.current); // Debug
      activeTopicRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTopic]); // Dependency to update when currentTopic changes

  const index = contentData.route.findIndex(
    (content) => content.topic === currentTopic
  );
  const currentIndex = index !== -1 ? index : 0; // Default to 0 if not found

  const previousTopic =
    currentIndex > 0 ? contentData.route[currentIndex - 1].topic : null;
  const nextTopic =
    currentIndex < contentData.route.length - 1
      ? contentData.route[currentIndex + 1].topic
      : null;

  const handleNavigation = (topic: string | null) => {
    if (topic) {
      const newPath = `/${category}/${contentData.about.name}/${topic}`;
      navigate(newPath);
      setCurrentTopic(topic); // Update the current topic state
    }
  };

  return (
    <>
      <Helmet>
        <title>{contentData.about.name} - My Study Website</title>
        <meta
          name="description"
          content={`Explore the ${contentData.about.name} course on my study website.`}
        />
      </Helmet>
      <Section className="section">
        <Header onClick={() => setShowTopic(true)} isShowTopicButton={true} />

        <Container className="content-wrapper">
          <div
            className={`content-topic ${showTopic ? "active" : undefined}`}
            ref={offCanvasRef}
          >
            <div className="content-topic-header">
              <h1>{contentData.about.name}</h1>
              <span>
                <CloseIcon onClick={() => setShowTopic(false)} />
              </span>
            </div>
            <ul>
              {contentData.route.map((content, index) => (
                <li
                  key={index}
                  ref={content.topic === currentTopic ? activeTopicRef : null}
                >
                  <NavLink
                    end
                    to={`/${category}/${contentData.about.name}/${content.topic}`}
                    onClick={() => {
                      setCurrentTopic(content.topic);
                      setShowTopic(false);
                    }}
                  >
                    {capitalizeFirstLetter(content.topic)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="content-main">
            <Outlet />
            <div className="navigation-buttons">
              <div
                className={`navigation-button ${
                  previousTopic ? "active" : undefined
                }`}
                onClick={() => handleNavigation(previousTopic)}
              >
                <ArrowBackIosIcon />
                <span>Previous</span>
              </div>

              <div
                className={`navigation-button ${
                  nextTopic ? "active" : undefined
                }`}
                onClick={() => handleNavigation(nextTopic)}
              >
                <span>Next</span>
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default Tutorial;
