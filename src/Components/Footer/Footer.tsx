import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footerMessage } from "../../utils/message";
import "./Footer.css";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import SocialMedia from "../../page/Home/Components/SocialMedia";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTranslation } from "react-i18next";

const languageNames: Record<string, string> = {
  en: "English",
  ta: "தமிழ்",
  hi: "हिन्दी",
};

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="footer-glass">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>{t("filter")}</h3>
          <p>
            Pixora is your memory vault — save, share, and relive your best
            moments with ease.
          </p>
          {/* Social Media Icons */}
          <SocialMedia />
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/privacy_policy" aria-label="Privacy Policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms_and_condition" aria-label="Terms and Conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/author" aria-label="About Us">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Language Section */}
        <div className="footer-section">
          <h3>Lang</h3>
          <div className="language-selector">
            <p>{languageNames[lang]}</p>
            <LanguagePicker
              direction="up"
              available={["en", "ta", "hi"]}
              current={lang}
              onChange={handleLanguageChange}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <address>
            <a href="mailto:support@pixora.com">support@pixora.com</a>
            <br />
            <a href="tel:+919876543210">+91-9876543210</a>
            <br />
            Chennai, Tamil Nadu, India
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footerMessage} | Made with ❤️ in India</p>
        <span className="toggle-button back-to-top" aria-label="Back to top">
          <KeyboardArrowUpIcon onClick={scrollToTop} />
        </span>
      </div>

      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pixora",
          url: "https://pixora.com",
          contactPoint: {
            "@type": "ContactPoint",
            email: "support@pixora.com",
            telephone: "+91-9876543210",
            contactType: "Customer Service",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "TN",
            addressCountry: "IN",
          },
        })}
      </script>
    </footer>
  );
};
