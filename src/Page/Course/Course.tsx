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
import { CourseType } from "../../model/course_model"; // Make sure this path points to your type definition

const Course = () => {
  const { category } = useParams();
  const isValidFolder = category && getCourseData()[category];

  if (!isValidFolder) {
    return <NotFound />;
  }

  const categoryCourses = getCourseData()[category];

  // Group courses by subCategory
  const groupedCourses = categoryCourses.reduce((groups, course) => {
    const subCat = course.subCategory || "General";
    if (!groups[subCat]) {
      groups[subCat] = [];
    }
    groups[subCat].push(course);
    return groups;
  }, {} as Record<string, CourseType[]>);

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

          {Object.entries(groupedCourses).map(([subCat, courses]) => (
            <div key={subCat} className="subcategory-section">
              <h2 className="subcategory-title">{subCat}</h2>
              <div className="course-list">
                {courses.map((item, index) => (
                  <div key={index} className="course-card">
                    <img
                      src={`/study/course-images/${item.img}`}
                      alt={item.name}
                      className="course-img"
                    />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <NavLink
                      to={`/${category}/${item.name}/${item.link}`}
                      className="course-link"
                    >
                      Learn More
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default Course;
