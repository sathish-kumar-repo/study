import { NavLink, Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./Tutorial.css";
import { toSnakeCase } from "../../utils/custom_string";
import { content } from "../../model/content_model";

interface TutorialProps {
  listOfTopics: content[];
}

const Tutorial = ({ listOfTopics }: TutorialProps) => {
  const { course_name, category } = useParams();
  console.log(course_name, category);
  console.log(listOfTopics);

  return (
    <Section className="section">
      <Header />

      <Container className="content-wrapper">
        <div className="content-topic">
          <h1>gjgh</h1>
          <ul>
            {listOfTopics.map(function (content, index) {
              return (
                <li key={index}>
                  <NavLink
                    key={index}
                    to={`/${category}/${course_name}/${toSnakeCase(
                      content["topic"]
                    )}`}
                  >
                    {content["topic"]}
                  </NavLink>
                  {/* <NavLink
              to={`/${category}/${course_name}/${toSnakeCase(topic)}`}
            >
              {topic}
            </NavLink> */}
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
