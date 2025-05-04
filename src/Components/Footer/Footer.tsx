import { Link } from "react-router-dom";
import { footerMessage } from "../../utils/message";
import "./Footer.css";
import React from "react";

interface FooterProps {
  isCourse?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isCourse }) => {
  return (
    <footer className={`footer-glass ${isCourse && "course"}`}>
      <div className="footer-content">
        <p>{footerMessage}</p>
        <div className="footer-links">
          <Link to={"/privacy_policy"} aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link to={"/terms_and_condition"} aria-label="Terms and Conditions">
            Terms
          </Link>
          <Link to={"/author"} aria-label="Contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
