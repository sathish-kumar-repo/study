import { H1, Media, Title } from "../../../../../components/UI";
import formula from "./img/formula.png";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import img10 from "./img/10.png";

const LIUI = () => {
  return (
    <>
      <Title>Lagrange Interpolation for Unequal intervals</Title>
      <H1>Formula</H1>
      <Media src={formula} />

      <H1>Model Sum</H1>
      <Media
        src={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
      />
    </>
  );
};

export default LIUI;
