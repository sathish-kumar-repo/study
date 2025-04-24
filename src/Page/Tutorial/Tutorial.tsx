import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./Tutorial.css";
import { ContentDataType } from "../../model/content_model";
import { capitalizeFirstLetter } from "../../utils/custom_string";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface TutorialProps {
  contentData: ContentDataType;
}

const Tutorial = ({ contentData }: TutorialProps) => {
  const { category } = useParams();
  const [showTopic, setShowTopic] = useState(false);
  const offCanvasRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
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

  // Extract and decode the value from the current URL
  const getCurrenttopic = (): string => {
    const url = window.location.href; // Get the current URL
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split("/"); // Split the path into segments
    const encodedValue = pathSegments[pathSegments.length - 1]; // Get the last segment
    return decodeURIComponent(encodedValue); // Decode the value
  };

  // Find the index of the current topic
  const currentIndex = contentData.route.findIndex(
    (content) => content.topic === getCurrenttopic()
  );

  const previousTopic =
    currentIndex > 0 ? contentData.route[currentIndex - 1].topic : null;
  const nextTopic =
    currentIndex < contentData.route.length - 1
      ? contentData.route[currentIndex + 1].topic
      : null;

  console.log(currentIndex);

  return (
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
            {contentData.route.map(function (content, index) {
              return (
                <li key={index}>
                  <NavLink
                    key={index}
                    end
                    to={`/${category}/${contentData.about.name}/${content.topic}`}
                    onClick={() => setShowTopic(false)}
                  >
                    {capitalizeFirstLetter(content.topic)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="content-main">
          <Outlet />
          <div className="navigation-buttons">
            <div
              className={`navigation-button ${
                previousTopic ? "active" : undefined
              }`}
              onClick={() =>
                navigate(
                  `/${category}/${contentData.about.name}/${previousTopic}`
                )
              }
            >
              <ArrowBackIosIcon />
              <span>Previous</span>
            </div>

            <div
              className={`navigation-button ${
                nextTopic ? "active" : undefined
              }`}
              onClick={() =>
                navigate(`/${category}/${contentData.about.name}/${nextTopic}`)
              }
            >
              <span>Next</span>
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Section>
  );
};

export default Tutorial;
