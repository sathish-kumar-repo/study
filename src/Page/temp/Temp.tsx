import React, { useState, useEffect } from "react";
import "./Temp.css";

const categories = ["Development", "Business", "Design", "Marketing"];

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Development",
    image: "https://placehold.co/300x180",
  },
  {
    id: 2,
    title: "UI/UX Design Basics",
    category: "Design",
    image: "https://placehold.co/300x180",
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    category: "Marketing",
    image: "https://placehold.co/300x180",
  },
  {
    id: 4,
    title: "Start Your Business 101",
    category: "Business",
    image: "https://placehold.co/300x180",
  },
  {
    id: 45,
    title: "Start Your Business 101",
    category: "Business",
    image: "https://placehold.co/300x180",
  },
  {
    id: 464,
    title: "Start Your Business 101",
    category: "Business",
    image: "https://placehold.co/300x180",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [showSidebar, setShowSidebar] = useState<boolean>(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setShowSidebar(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  return (
    <div className="wrapper">
      {isMobile && (
        <button
          className="toggle-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? "Hide Filters" : "Show Filters"}
        </button>
      )}

      <div className="container">
        {isMobile ? (
          showSidebar && (
            <aside className="sidebar mobile-sidebar">
              <h2>Categories</h2>
              <ul>
                <li
                  onClick={() => setSelectedCategory(null)}
                  className={!selectedCategory ? "active" : ""}
                >
                  All
                </li>
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={selectedCategory === cat ? "active" : ""}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </aside>
          )
        ) : (
          <aside className="sidebar">
            <h2>Categories</h2>
            <ul>
              <li
                onClick={() => setSelectedCategory(null)}
                className={!selectedCategory ? "active" : ""}
              >
                All
              </li>
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? "active" : ""}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>
        )}

        <main className="course-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.category}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
