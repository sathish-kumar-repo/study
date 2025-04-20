import "./Home.css";
import { description, footerMessage, heading } from "../../utils/message";
import { SocialMedia } from "./Components/SocialMedia";
import LottieAnimation from "./Components/LottieAnimation";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";

export const Home = () => {
  return (
    <Section className="home-section">
      <div className="container">
        <Header />
        <div className="content">
          <h2>{heading}</h2>
          <p>{description}</p>
          <a
            href="#"
            // onClick={() => {
            //   onItemClick(folderKey[0]);
            //   setAtiveFolder(folderKey[0]);
            // }}
          >
            My Memories..
          </a>
        </div>
        <LottieAnimation />
        <SocialMedia />
        <p className="copyrightText">{footerMessage}</p>
      </div>
    </Section>
  );
};
