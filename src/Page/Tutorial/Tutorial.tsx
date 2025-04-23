import { NavLink, Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./Tutorial.css";
import { ContentDataType } from "../../model/content_model";
import { capitalizeFirstLetter } from "../../utils/custom_string";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface TutorialProps {
  contentData: ContentDataType;
}

const Tutorial = ({ contentData }: TutorialProps) => {
  const { category } = useParams();
  const [showTopic, setShowTopic] = useState(false);
  const offCanvasRef = useRef<HTMLDivElement>(null);

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
        </div>
      </Container>
      <Footer />
    </Section>
  );
};

export default Tutorial;
