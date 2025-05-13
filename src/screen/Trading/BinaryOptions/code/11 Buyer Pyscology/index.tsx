import { H1, Media, Title } from "../../../../../components/UI";
import img1 from "./img/1.png";

const BuyerPyscology = () => {
  return (
    <>
      <Title>Buyer Pyscology</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/y0kGJnD3zXk" />

      <H1>Pyscology and Price Action</H1>
      <Media src={img1} />
    </>
  );
};

export default BuyerPyscology;
