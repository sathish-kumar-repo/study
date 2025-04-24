import { Helmet } from "react-helmet";
import Animated from "../../components/Animated/Animated";

const TermsAndCondition = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - My Study Website</title>
        <meta
          name="description"
          content="Read the terms and conditions for using the study website."
        />
      </Helmet>
      <Animated>
        <h1>Terms and Condition</h1>
        <p>
          Welcome to Study! These Terms and Conditions outline the rules and
          regulations for using our website, accessible at [your website URL].
          By accessing or using Study, you agree to comply with these terms. If
          you do not agree with any part of these terms, please discontinue use
          of our website.
        </p>

        <h2>1. Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to learning
          notes, tutorials, text, graphics, logos, and images, is the
          intellectual property of Study unless otherwise stated. Unauthorized
          use, reproduction, or distribution of our content is strictly
          prohibited.
        </p>

        <h2>2. Use of Website</h2>
        <p>
          You may use Study for personal and educational purposes only. You
          agree not to:
        </p>
        <ul>
          <li>Use the website for any unlawful purpose.</li>
          <li>
            Disrupt or interfere with the security of the website or its
            resources.
          </li>
          <li>
            Attempt to gain unauthorized access to restricted areas of the
            website.
          </li>
        </ul>

        <h2>3. User Contributions</h2>
        <p>
          If you submit any content, such as comments or suggestions, to Study,
          you grant us a non-exclusive, royalty-free, perpetual, and worldwide
          license to use, reproduce, modify, and display such content.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Study may contain links to third-party websites. We are not
          responsible for the content, privacy policies, or practices of
          third-party websites. Accessing these links is at your own risk.
        </p>

        <h2>5. Disclaimer</h2>
        <p>
          The content provided on Study is for informational purposes only.
          While we strive for accuracy, we do not guarantee the completeness or
          reliability of the information. Use the content at your own discretion
          and risk.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          Study shall not be held liable for any damages, losses, or claims
          arising from your use of the website or its content. This includes,
          but is not limited to, direct, indirect, incidental, or consequential
          damages.
        </p>

        <h2>7. Changes to Terms and Conditions</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be effective immediately upon posting. Your continued use
          of the website signifies your acceptance of the updated terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of [your jurisdiction]. Any
          disputes will be resolved in the courts of [your jurisdiction].
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at [your contact email].
        </p>
      </Animated>
    </>
  );
};

export default TermsAndCondition;
