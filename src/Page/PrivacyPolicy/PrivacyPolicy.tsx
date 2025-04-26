import { Helmet } from "react-helmet";
import Animated from "../../components/Animated/Animated";
import { email } from "../../utils/message";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - My Study Website</title>
        <meta
          name="description"
          content="Review the Privacy Policy for using our study platform."
        />
      </Helmet>
      <Animated>
        <h1>Privacy Policy</h1>
        <p>
          Welcome to Study! This Privacy Policy outlines how we handle your
          information when you visit our website. By accessing or using Study,
          you agree to the terms of this Privacy Policy. If you do not agree
          with our practices, please discontinue use of the website.
        </p>

        <h2>1. No Collection of Personal Data</h2>
        <p>
          We respect your privacy. Study does not collect, store, or process any
          personally identifiable information (PII) from users. Our platform is
          designed to function without requiring users to submit any personal
          data.
        </p>

        <h2>2. Cookies</h2>
        <p>
          We may utilize cookies to enhance your browsing experience. These
          cookies do not collect personal information and are used strictly for
          website functionality and basic analytics purposes. You can manage or
          disable cookies through your browser settings. Please note that
          disabling cookies may impact certain features of the website.
        </p>

        <h2>3. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites for your
          convenience. We do not control, endorse, or assume responsibility for
          the privacy practices, policies, or content of third-party sites.
          Accessing these external sites is at your own risk.
        </p>

        <h2>4. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time without
          prior notice. Updates will become effective immediately upon posting
          on this page. Continued use of the website after any changes
          constitutes your acceptance of the revised Privacy Policy.
        </p>

        <h2>5. Contact Us</h2>
        <p>
          If you have any questions, concerns, or inquiries regarding this
          Privacy Policy, please feel free to contact us at
          <strong>{email}</strong>.
        </p>
      </Animated>
    </>
  );
};

export default PrivacyPolicy;
