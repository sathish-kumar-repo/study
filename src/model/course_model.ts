// Define the structure of a single course
export type Course = {
  name: string;
  description: string;
  link: string;
  img: string;
};

// Define the structure of the course categories
export type CourseData = {
  [category: string]: Course[];
};
