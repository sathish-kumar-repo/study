import Container from "../../../components/Container";
import { Footer } from "../../../components/Footer/Footer";
import { Header } from "../../../components/Header/Header";
import Section from "../../../components/Section";
import "./sample.css";

const Photography = () => {
  return (
    <Section className="section">
      <Header />
      <Container className="content-wrapper">
        <div>Photography</div>
        <div className="content">content</div>
      </Container>
      <Footer />
    </Section>
  );
};

export default Photography;
