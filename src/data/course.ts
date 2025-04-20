// Define the structure of a single course
type Course = {
  name: string;
  description: string;
  link: string;
  img: string;
};

// Define the structure of the course categories
type CourseData = {
  [category: string]: Course[];
};

// The course data object
const course: CourseData = {
  photography: [
    {
      name: "Photography",
      description: "Learn about photography.",
      link: "/photography",
      img: "/images/photography.jpg",
    },
    {
      name: "Coding",
      description: "Explore the world of coding.",
      link: "/coding",
      img: "/images/coding.jpg",
    },
    {
      name: "Design",
      description: "Master the art of design.",
      link: "/design",
      img: "/images/design.jpg",
    },
    {
      name: "Photography",
      description: "Learn about photography.",
      link: "/photography",
      img: "/images/photography.jpg",
    },
    {
      name: "Coding",
      description: "Explore the world of coding.",
      link: "/coding",
      img: "/images/coding.jpg",
    },
    {
      name: "Design",
      description: "Master the art of design.",
      link: "/design",
      img: "/images/design.jpg",
    },
  ],
  photography1: [
    {
      name: "Photography1",
      description: "Learn about photography.",
      link: "/photography1",
      img: "/images/photography1.jpg",
    },
    {
      name: "Coding1",
      description: "Explore the world of coding.",
      link: "/coding1",
      img: "/images/coding1.jpg",
    },
    {
      name: "Design1",
      description: "Master the art of design.",
      link: "/design1",
      img: "/images/design1.jpg",
    },
  ],
  photography2: [
    {
      name: "Photography2",
      description: "Learn about photography.",
      link: "/photography1",
      img: "/images/photography1.jpg",
    },
  ],
};

export default course;
