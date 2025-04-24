import "./Course.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { NavLink, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { toTitleCase } from "../../utils/custom_string";
import Section from "../../components/Section";
import Container from "../../components/Container";
import getCourseData from "../../utils/get_course_data";
import { Helmet } from "react-helmet";

const Course = () => {
  const { category } = useParams();
  const isValidFolder = category && getCourseData()[category];

  if (!isValidFolder) {
    return <NotFound />;
  }

  const categoryCourses = getCourseData()[category];
  // const categoryCourses = getCourseData()[category as keyof typeof course];

  return (
    <>
      <Helmet>
        <title>Courses - My Study Website</title>
        <meta
          name="description"
          content="Browse various courses and tutorials on different subjects."
        />
      </Helmet>
      <Section className="course-section">
        <Header />
        <Container className="course-wrapper">
          <h1 className="course-heading">{toTitleCase(category)} </h1>

          <div key={category} className="course-list">
            {categoryCourses.map((item, index) => (
              <div key={index} className="course-card">
                <img
                  src={`/course-images/${item.img}`}
                  alt={item.name}
                  className="course-img"
                />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                {/* /${category}/${item.link}` */}
                <NavLink
                  to={`/${category}/${item.name}/${item.link}`}
                  className="course-link"
                >
                  Learn More
                </NavLink>
              </div>
            ))}
          </div>
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default Course;
