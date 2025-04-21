// Define the structure of a single course
export type CourseType = {
  name: string;
  description: string;
  link: string;
  img: string;
};

// Define the structure of the course categories
export type CourseDataType = {
  [category: string]: CourseType[];
};
