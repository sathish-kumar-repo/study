import { NavLink, Outlet, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./Tutorial.css";
import { ContentDataType } from "../../model/content_model";
import { capitalizeFirstLetter } from "../../utils/custom_string";

interface TutorialProps {
  contentData: ContentDataType;
}

const Tutorial = ({ contentData }: TutorialProps) => {
  const { category } = useParams();

  return (
    <Section className="section">
      <Header />

      <Container className="content-wrapper">
        <div className="content-topic">
          <h1>{contentData.about.name}</h1>
          <ul>
            {contentData.route.map(function (content, index) {
              return (
                <li key={index}>
                  <NavLink
                    key={index}
                    end
                    to={`/${category}/${contentData.about.name}/${content.topic}`}
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
