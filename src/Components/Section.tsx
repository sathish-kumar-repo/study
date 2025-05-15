import styled from "styled-components";
import img from "../assets/img/bg3.jpg";

const Section = styled.section`
  background: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
`;

export default Section;
