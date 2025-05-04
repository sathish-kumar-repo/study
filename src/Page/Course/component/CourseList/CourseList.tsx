import { NavLink } from "react-router-dom";
import { CourseType } from "../../../../model/course_model";
import NoResultFound from "../../../../components/NoResultFound/NoResultFound";
import "./CourseList.css";

interface CourseListProps {
  processedCourses: Record<string, CourseType[]>;
  selectedSubCategory: string;
  searchQuery: string;
}

const CourseList: React.FC<CourseListProps> = ({
  processedCourses,
  selectedSubCategory,
  searchQuery,
}) => {
  return (
    <>
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
                      to={`/${subCat}/${item.name}/${item.link}`}
                      className="course-link"
                    >
                      Learn More
                    </NavLink>
                  </div>
                ))}
              </div>
            ) : (
              !isAll && <NoResultFound searchTerm={searchQuery} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default CourseList;
