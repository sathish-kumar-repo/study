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
import { useEffect, useRef, useState } from "react";
import { CourseType } from "../../model/course_model";
import FilterSidebar from "./component/FilterSidebar/FilterSidebar";

const Course = () => {
  const { category } = useParams();
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [recentlyAdded, setRecentlyAdded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [toggleFilter, setToggleFilter] = useState(window.innerWidth > 1200);

  const isValidFolder = category && getCourseData()[category];

  if (!isValidFolder) {
    return <NotFound />;
  }

  const categoryCourses = getCourseData()[category];

  // Filter the courses based on search query (case-insensitive)
  const filteredCourses = categoryCourses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Process the courses based on 'recentlyAdded' toggle
  const processedCourses = recentlyAdded
    ? [...filteredCourses].reverse()
    : filteredCourses;

  // Count total courses
  const totalCourses = processedCourses.length;
  const showControls = totalCourses > 1;

  // Group by subcategory
  const groupedCourses = processedCourses.reduce((groups, course) => {
    const subCat = course.subCategory || "General";
    if (!groups[subCat]) {
      groups[subCat] = [];
    }
    groups[subCat].push(course);
    return groups;
  }, {} as Record<string, CourseType[]>);

  const subCategories = ["All", ...Object.keys(groupedCourses)];

  const prevWidthRef = useRef(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const prevWidth = prevWidthRef.current;

      // 📉 Desktop → Mobile: hide sidebar
      if (prevWidth > 1200 && currentWidth <= 1200) {
        setToggleFilter(false);
      }

      // 📈 Mobile → Desktop: show sidebar
      if (prevWidth <= 1200 && currentWidth > 1200) {
        setToggleFilter(true);
      }

      // Update previous width for next comparison
      prevWidthRef.current = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  // Handle scroll to unfocus the input
  useEffect(() => {
    const handleScroll = () => {
      if (inputRef.current) {
        inputRef.current.blur(); // Unfocus the input when the user scrolls
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inputRef]);

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
          {/* <h1 className="course-heading">{toTitleCase(category)}</h1> */}

          {/* Filter + Sort Controls */}
          {showControls && <div className="course-controls"></div>}

          <div className={`course-main ${toggleFilter && "active"}`}>
            {/* Course Sections */}
            {Object.entries(groupedCourses).map(([subCat, courses]) => {
              if (
                selectedSubCategory !== "All" &&
                selectedSubCategory !== subCat
              )
                return null;

              return (
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
              );
            })}
          </div>
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default Course;
