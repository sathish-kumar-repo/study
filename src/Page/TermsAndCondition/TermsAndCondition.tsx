import { Helmet } from "react-helmet";
import Animated from "../../components/Animated/Animated";
import { useTranslation } from "react-i18next";
import { email } from "../../utils/message";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("termsAndConditions.title")}</title>
        <meta
          name="description"
          content={t("termsAndConditions.description")}
        />
      </Helmet>
      <Animated>
        <h1>{t("termsAndConditions.title")}</h1>
        <p>{t("termsAndConditions.intellectualProperty")}</p>

        <h2>1. {t("termsAndConditions.useOfWebsite")}</h2>
        <ul>
          <li>{t("termsAndConditions.userContributions")}</li>
          <li>{t("termsAndConditions.thirdPartyLinks")}</li>
        </ul>

        <h2>2. {t("termsAndConditions.disclaimer")}</h2>
        <p>{t("termsAndConditions.limitationOfLiability")}</p>

        <h2>3. {t("termsAndConditions.changesToTerms")}</h2>
        <p>{t("termsAndConditions.governingLaw")}</p>

        <h2>4. {t("termsAndConditions.contactUs")}</h2>
        <p>{t("termsAndConditions.contactUs", { email: email })}</p>
      </Animated>
    </>
  );
};

export default TermsAndConditions;
