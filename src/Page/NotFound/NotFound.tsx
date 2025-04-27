import { Link } from "react-router-dom";
import "./NotFound.css";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import { Footer } from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Helmet>
      <Section className="not-found-section">
        <Header />
        <div className="not-found-container">
          <p className="error-code">404</p>
          <h1 className="title">Page not found</h1>
          <p className="subtitle">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <Link to={"/"} className="action">
            Go back home
          </Link>
        </div>
        <Footer />
      </Section>
    </>
  );
};

export default NotFound;
