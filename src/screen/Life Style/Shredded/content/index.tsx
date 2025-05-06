import Diet from "../code/Diet";
import Progress from "../code/Progress";

const shreddedContent = {
  about: {
    subCategory: "Gym Routines",
    name: "Shredded",
    description: "Lean, defined, muscular physique with cuts",
    link: "",
    img: "chad.jpeg",
  },
  route: [
    {
      topic: "Progress",
      page: <Progress />,
    },
    {
      topic: "Diet",
      page: <Diet />,
    },
  ],
};

export default shreddedContent;
