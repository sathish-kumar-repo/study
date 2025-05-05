import LIUI from "../code/Langrange Interpolation for Unequal intervals";
import NFB from "../code/Newton Foward and Backward";
import NDD from "../code/Newton's Divided Different";
import SOTR from "../code/Simpsons One Third Rule";
import STER from "../code/Simpsons Three Eight Rule";

const mathsSem2Content = {
  about: {
    subCategory: "1st year",
    name: "1st year - 2nd sem",
    description: "Learn about Numerical methods",
    link: "",
    img: "maths-sem-2.avif",
  },
  route: [
    {
      topic: "Newton Forward and backward",
      page: <NFB />,
    },
    {
      topic: "Langrange Interpolation for Unequal intervals",
      page: <LIUI />,
    },
    {
      topic: "Newton's Divided Different",
      page: <NDD />,
    },
    {
      heading: "Numerical Integration",
      topic: "Simpsons One Third rule",
      page: <SOTR />,
    },
    {
      topic: "Simpsons Three Eight rule",
      page: <STER />,
    },
  ],
};

export default mathsSem2Content;
