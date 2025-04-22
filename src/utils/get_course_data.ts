// import mainData from "../data/main_data";

// import { CourseDataType, CourseType } from "../model/course_model";

// function getCourseData(): CourseDataType {
//   // This function returns the course list from the content data
//   const courseData: CourseDataType = {};

//   Object.entries(mainData).forEach(([category, value]) => {
//     const courseList: CourseType[] = [];
//     value.forEach((course) => {
//       courseList.push({
//         name: course.about.name,
//         description: course.about.description,
//         link: course.about.link,
//         img: course.about.img,
//       });
//     });
//     courseData[category] = courseList;
//   });

//   return courseData;
// }

// export default getCourseData;

import mainData from "../data/main_data";
import { CourseDataType, CourseType } from "../model/course_model";

function getCourseData(): CourseDataType {
  // Transform the main data into the required course data structure
  return Object.fromEntries(
    Object.entries(mainData).map(([category, value]) => [
      category,
      value.map((course) => ({
        name: course.about.name,
        description: course.about.description,
        link: course.about.link,
        img: course.about.img,
      })),
    ])
  ) as CourseDataType;
}

export default getCourseData;
