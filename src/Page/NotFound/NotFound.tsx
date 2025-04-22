import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Section className="not-found-section">
      <Header />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Footer />
    </Section>
  );
};

export default NotFound;
