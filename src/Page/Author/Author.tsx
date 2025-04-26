import "./Author.css";
import { Helmet } from "react-helmet";
import Section from "../../components/Section";
import Tilt from "react-parallax-tilt";
import SocialMedia from "../Home/Components/SocialMedia";
import { useEffect, useState } from "react";

const Author = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust breakpoint if needed
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Author - My Study Website</title>
        <meta
          name="description"
          content="Learn more about the author and the study materials provided."
        />
      </Helmet>

      <Section className="author-container">
        <Tilt tiltEnable={!isMobile}>
          <div className="card">
            <img
              className="profile"
              src="/study/web-images/profile.jpg"
              alt="Profile"
            />
            <h2>Sathish Kumar</h2>
            <p>I'm student of MKU Madurai and I like to learn new thing</p>
            <SocialMedia />
            <a
              href="https://wa.me/919566506832"
              className="btn"
              rel="noopener noreferrer"
            >
              Whatsapp me
            </a>
          </div>
        </Tilt>
      </Section>
    </>
  );
};

export default Author;
