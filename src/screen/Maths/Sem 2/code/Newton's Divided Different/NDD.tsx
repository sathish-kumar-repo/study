import { Media, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

const NDD = () => {
  return (
    <>
      <Title>Newton's Divided Different</Title>
      <Media src={[img1, img2, img3]} />
    </>
  );
};

export default NDD;
