import styled from "styled-components";
import bgImg from "../assets/img/bg3.jpg";

const Section = styled.section`
  background: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  // width: 100vw;
`;

export default Section;
