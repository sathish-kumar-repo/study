import mainData from "../../Main/data";
import { CourseDataType } from "../model/course_model";

function getCourseData(): CourseDataType {
  // Transform the main data into the required course data structure
  return Object.fromEntries(
    Object.entries(mainData).map(([category, value]) => [
      category,
      value.map((course) => ({
        subCategory:
          "subCategory" in course.about ? course.about.subCategory : undefined,
        name: course.about.name,
        description: course.about.description,
        img: course.about.img,
        link: "link" in course.about ? course.about.link : undefined,
      })),
    ])
  ) as CourseDataType;
}

export default getCourseData;
