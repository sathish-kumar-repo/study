import { Media, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";

const SOTR = () => {
  return (
    <>
      <Title>Simpsons One Third Rule</Title>
      <Media src={[img1, img2, img3, img4, img5, img6, img7]} />
    </>
  );
};

export default SOTR;
