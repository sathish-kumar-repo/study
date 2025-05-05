import React from "react";
import { Link } from "react-router-dom";
import { footerMessage } from "../../utils/message";
import "./Footer.css";

interface FooterProps {
  isCourse?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isCourse }) => {
  return (
    <footer className={`footer-glass ${isCourse ? "course" : ""}`}>
      <div className="footer-container">
        <div className="footer-section company-info">
          <h2>Pixora</h2>
          <p>{footerMessage}</p>
          <p>&copy; {new Date().getFullYear()} Pixora. All rights reserved.</p>
        </div>

        <div className="footer-section nav-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/privacy_policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms_and_condition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/author">Contact</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section language-select">
          <h3>Language</h3>
          <select
            aria-label="Select Language"
            onChange={(e) => {
              const lang = e.target.value;
              // Example logic: Save to localStorage or use i18n lib
              localStorage.setItem("language", lang);
              window.location.reload();
            }}
            defaultValue={localStorage.getItem("language") || "en"}
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
            <option value="hi">हिन्दी</option>
            <option value="es">Español</option>
          </select>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.09v-2.89h2.35V9.41c0-2.33 1.39-3.63 3.52-3.63 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.17 0-1.53.73-1.53 1.48v1.77h2.6l-.42 2.89h-2.18v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9 12.13 12.13 0 0 1-8.8-4.46 4.28 4.28 0 0 0 1.33 5.7A4.24 4.24 0 0 1 2.8 9.7v.05a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.54 12.2-12.21 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 5.5a8.6 8.6 0 0 1-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.94 6.5a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0zM4.5 8.75h2.88v8.75H4.5V8.75zM9.75 8.75h2.76v1.2h.04c.38-.72 1.3-1.48 2.68-1.48 2.86 0 3.39 1.88 3.39 4.32v4.7h-2.88v-4.17c0-1-.02-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.2v4.25H9.75V8.75z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
