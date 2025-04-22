import { Link } from "react-router-dom";
import { footerMessage } from "../../utils/message";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-glass">
      <div className="footer-content">
        <p>{footerMessage}</p>
        <div className="footer-links">
          <Link to={"/privacy_policy"}>Privacy Policy</Link>
          <Link to={"/terms_and_condition"}>Terms</Link>
          <Link to={"/author"}>Contact</Link>
        </div>
      </div>
    </footer>
  );
};
