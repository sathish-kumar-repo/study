import { NavLink, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./Tutorial.css";
import { toSnakeCase } from "../../utils/custom_string";
import { ReactNode } from "react";
import { content } from "../../screen/Phtography/content/photography_content";

interface TutorialProps {
  listOfTopics: content[];
  children?: ReactNode;
}

const Tutorial = ({ listOfTopics, children }: TutorialProps) => {
  const { course_name, category } = useParams();

  return (
    <Section className="section">
      <Header />

      <Container className="content-wrapper">
        <div className="content-topic">
          <h1>Photography</h1>
          <ul>
            {listOfTopics.map((content, index) => (
              <li key={index}>
                <NavLink to={`/${category}/${toSnakeCase(content["topic"])}`}>
                  {content["topic"]}
                </NavLink>
                {/* <NavLink
                  to={`/${category}/${course_name}/${toSnakeCase(topic)}`}
                >
                  {topic}
                </NavLink> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="content-main">{children}</div>
      </Container>
      <Footer />
    </Section>
  );
};

export default Tutorial;
