import { Helmet } from "react-helmet";
import Animated from "../../components/Animated/Animated";
import { email } from "../../utils/message";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - My Study Website</title>
        <meta
          name="description"
          content="Review the Terms and Conditions for using our study platform."
        />
      </Helmet>
      <Animated>
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to Study! These Terms and Conditions govern your use of our
          website, accessible at
          <strong> https://sathish-kumar-repo.github.io/study/</strong>. By
          accessing or using Study, you agree to be bound by these terms. If you
          do not agree to all of the terms, please discontinue using our website
          immediately.
        </p>

        <h2>1. Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to learning
          materials, tutorials, text, graphics, logos, and images, is the
          intellectual property of Study unless otherwise noted. Unauthorized
          use, reproduction, or distribution of any content is strictly
          prohibited without prior written consent.
        </p>

        <h2>2. Use of the Website</h2>
        <p>
          You may use Study solely for personal and educational purposes. You
          agree not to:
        </p>
        <ul>
          <li>Use the website for any unlawful or prohibited purpose.</li>
          <li>
            Disrupt, damage, or interfere with the website’s functionality or
            security.
          </li>
          <li>
            Attempt to gain unauthorized access to restricted sections of the
            website.
          </li>
        </ul>

        <h2>3. User Contributions</h2>
        <p>
          If you submit content, such as comments or suggestions, you grant
          Study a non-exclusive, royalty-free, perpetual, and worldwide license
          to use, reproduce, modify, and display such content in any form or
          media.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Study may contain links to external websites operated by third
          parties. We do not control or endorse the content or practices of any
          third-party websites and disclaim any responsibility for them.
          Accessing third-party links is at your own risk.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The content provided on Study is for informational purposes only.
          While we strive to maintain accuracy and relevance, we make no
          guarantees regarding the completeness, reliability, or suitability of
          any information. Use of the content is at your own discretion.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Study be liable for any direct, indirect,
          incidental, special, consequential, or punitive damages arising out of
          your access to, use of, or inability to use the website or its
          content.
        </p>

        <h2>7. Changes to Terms and Conditions</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time
          without prior notice. Changes are effective immediately upon posting.
          Continued use of the website after changes constitutes your acceptance
          of the updated terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of
          <strong> India</strong>. Any disputes arising from or related to the
          use of this website shall be subject to the exclusive jurisdiction of
          the courts located in
          <strong> India</strong>.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms and Conditions, please
          contact us at <strong>{email}</strong>.
        </p>
      </Animated>
    </>
  );
};

export default TermsAndConditions;
