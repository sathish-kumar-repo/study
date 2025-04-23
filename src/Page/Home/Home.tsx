import "./Home.css";
import { description, footerMessage, heading } from "../../utils/message";
import { SocialMedia } from "./Components/SocialMedia";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import { Character } from "./Components/Character";

export const Home = () => {
  return (
    <Section className="home-section">
      <div className="container">
        <Header />
        <div className="content">
          <h2>{heading}</h2>
          <p>{description}</p>
          <Link to={"/author"}>My Memories..</Link>
        </div>
        <Character />
        <SocialMedia />
        <p className="copyrightText">{footerMessage}</p>
      </div>
    </Section>
  );
};
