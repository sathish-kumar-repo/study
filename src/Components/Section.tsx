import styled from "styled-components";
import bgImg from "../assets/img/bg.jpg";

const Section = styled.section`
  background: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
`;

export default Section;
