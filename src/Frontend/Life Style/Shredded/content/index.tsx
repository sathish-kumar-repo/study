import Diet from "../code/Diet";
import Measurement from "../code/Measurement";
import Progress from "../code/Progress";

const shreddedContent = {
  about: {
    subCategory: "Gym Routines",
    name: "Shredded",
    description: "Lean, defined, muscular physique with cuts",
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
    {
      topic: "Measurement",
      page: <Measurement />,
    },
  ],
};

export default shreddedContent;
