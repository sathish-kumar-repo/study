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

// The course data object
const course: CourseData = {
  photography: [
    {
      name: "Photography",
      description: "Learn about photography.",
      link: "photography",
      img: "/course-images/photography.jpg",
    },
    {
      name: "Coding",
      description: "Explore the world of coding.",
      link: "/coding",
      img: "/course-images/coding.jpg",
    },
    {
      name: "Design",
      description: "Master the art of design.",
      link: "/design",
      img: "/course-images/design.jpg",
    },
    {
      name: "Photography",
      description: "Learn about photography.",
      link: "/photography",
      img: "/course-images/photography.jpg",
    },
    {
      name: "Coding",
      description: "Explore the world of coding.",
      link: "/coding",
      img: "/course-images/coding.jpg",
    },
    {
      name: "Design",
      description: "Master the art of design.",
      link: "/design",
      img: "/course-images/design.jpg",
    },
  ],
  photography1: [
    {
      name: "Photography1",
      description: "Learn about photography.",
      link: "/photography1",
      img: "/course-images/photography.jpg",
    },
    {
      name: "Coding1",
      description: "Explore the world of coding.",
      link: "/coding1",
      img: "/course-images/coding.jpg",
    },
    {
      name: "Design1",
      description: "Master the art of design.",
      link: "/design1",
      img: "/course-images/design.jpg",
    },
  ],
  photography2: [
    {
      name: "Photography2",
      description: "Learn about photography.",
      link: "/photography1",
      img: "/course-images/photography.jpg",
    },
  ],
};

export default course;
