import "./Home.css";
import { description, footerMessage, heading } from "../../utils/message";
import { SocialMedia } from "./Components/SocialMedia";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import { Character } from "./Components/Character";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - My Study Website</title>
        <meta
          name="description"
          content="Welcome to my personal study website with tutorials and resources."
        />
      </Helmet>
      <Section className="home-section">
        <div className="container">
          <Header />
          <div className="content">
            <h2>{heading}</h2>
            <p>{description}</p>
            <Link to={"/author"}>By Sathish...</Link>
          </div>
          <Character />
          <SocialMedia />
          <p className="copyrightText">{footerMessage}</p>
        </div>
      </Section>
    </>
  );
};
