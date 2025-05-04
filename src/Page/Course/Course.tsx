import "./Course.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { NavLink, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Section from "../../components/Section";
import Container from "../../components/Container";
import getCourseData from "../../utils/get_course_data";
import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import { CourseType } from "../../model/course_model";
import FilterSidebar from "./component/FilterSidebar/FilterSidebar";
import NoResultFound from "../../components/NoResultFound/NoResultFound";

const Course = () => {
  const { category } = useParams();
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [recentlyAdded, setRecentlyAdded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleFilter, setToggleFilter] = useState(window.innerWidth > 1200);

  const isValidFolder = category && getCourseData()[category];

  if (!isValidFolder) {
    return <NotFound />;
  }

  const categoryCourses = getCourseData()[category];

  // Group all courses by subcategory
  const groupedCourses = categoryCourses.reduce((groups, course) => {
    const subCat = course.subCategory || "General";
    if (!groups[subCat]) {
      groups[subCat] = [];
    }
    groups[subCat].push(course);
    return groups;
  }, {} as Record<string, CourseType[]>);

  // Filter by search term (case-insensitive)
  const filteredCourses = Object.entries(groupedCourses).reduce(
    (result, [subCat, courses]) => {
      const filtered = courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      result[subCat] = filtered;
      return result;
    },
    {} as Record<string, CourseType[]>
  );

  // Handle Recently Added: reverse subcategory and course order
  const processedCourses = recentlyAdded
    ? Object.fromEntries(
        Object.entries(filteredCourses)
          .reverse()
          .map(([subCat, courses]) => [subCat, [...courses].reverse()])
      )
    : filteredCourses;
  const baseSubCategories = Object.keys(processedCourses);
  const subCategories = ["All", ...baseSubCategories];

  // const subCategories = ["All", ...Object.keys(groupedCourses)];

  const prevWidthRef = useRef(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const prevWidth = prevWidthRef.current;
      if (prevWidth > 1200 && currentWidth <= 1200) {
        setToggleFilter(false);
      }
      if (prevWidth <= 1200 && currentWidth > 1200) {
        setToggleFilter(true);
      }
      prevWidthRef.current = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (inputRef.current) inputRef.current.blur();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <FilterSidebar
            toggleFilter={toggleFilter}
            handleToggleFilter={() => setToggleFilter((prev) => !prev)}
            searchQuery={searchQuery}
            setSearchQuery={(query) => setSearchQuery(query)}
            recentlyAdded={recentlyAdded}
            handleRecentlyAdded={() => setRecentlyAdded((prev) => !prev)}
            categoryOptions={subCategories}
            selectedCategory={selectedSubCategory}
            handelSelectedCategory={setSelectedSubCategory}
            ref={inputRef}
          />

          <div className={`course-main ${toggleFilter && "active"}`}>
            {selectedSubCategory === "All" &&
              Object.values(processedCourses).every((c) => c.length === 0) && (
                <NoResultFound />
              )}
            {Object.entries(processedCourses).map(([subCat, courses]) => {
              const isAll = selectedSubCategory === "All";
              const isSelected = selectedSubCategory === subCat;

              if (isAll && courses.length === 0) return null;
              if (!isAll && !isSelected) return null;

              return (
                <div key={subCat} className="subcategory-section">
                  <h2 className="subcategory-title">{subCat}</h2>
                  {courses.length > 0 ? (
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
                  ) : (
                    !isAll && (
                      <div className="no-courses-message">
                        <p>No courses found in this subcategory.</p>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </Container>
        <Footer isCourse={true} />
      </Section>
    </>
  );
};

export default Course;
