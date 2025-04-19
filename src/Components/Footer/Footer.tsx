import { footerMessage } from "../../utils/message";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-glass">
      <div className="footer-content">
        <p>{footerMessage}</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};
