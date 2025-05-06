import { Link } from "react-router-dom";
import "./NotFound.css";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header/Header";
import Section from "../../components/Section";
import { Footer } from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("notfound.title")}</title>
        <meta name="description" content={t("notfound.description")} />
      </Helmet>
      <Section className="not-found-section">
        <Header />
        <div className="not-found-container">
          <p className="error-code">404</p>
          <h1 className="title">{t("notfound.heading")}</h1>
          <p className="subtitle">{t("notfound.subtitle")}</p>

          <Link to="/" className="action">
            {t("notfound.action")}
          </Link>
        </div>
        <Footer />
      </Section>
    </>
  );
};

export default NotFound;
