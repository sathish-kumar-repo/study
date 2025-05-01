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
import { useState } from "react";
import { CourseType } from "../../model/course_model";

const Course = () => {
  const { category } = useParams();
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [recentlyAdded, setRecentlyAdded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

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
          <h1 className="course-heading">{toTitleCase(category)}</h1>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search courses by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter + Sort Controls */}
          {showControls && (
            <div className="course-controls">
              <div className="subcategory-filter">
                <label htmlFor="subcategory">Filter by Subcategory:</label>
                <select
                  id="subcategory"
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                >
                  {subCategories.map((sub, index) => (
                    <option key={index} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="recent-toggle"
                onClick={() => setRecentlyAdded(!recentlyAdded)}
              >
                {recentlyAdded ? "Sort: Newest First 🔁" : "Sort: Default"}
              </button>
            </div>
          )}

          {/* Course Sections */}
          {Object.entries(groupedCourses).map(([subCat, courses]) => {
            if (selectedSubCategory !== "All" && selectedSubCategory !== subCat)
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
        </Container>
        <Footer />
      </Section>
    </>
  );
};

export default Course;
