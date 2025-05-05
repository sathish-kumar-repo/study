import { Media, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/WhatsApp Image 2025-03-16 at 18.45.07_edb2f0a8.jpg";

const NFB = () => {
  return (
    <>
      <Title>Newton forward and backward</Title>
      <Media src={[img1, img2, img3]} />
    </>
  );
};

export default NFB;
