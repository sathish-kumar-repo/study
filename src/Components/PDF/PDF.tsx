import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import styles from "./style.module.css";

interface PDFViewProps {
  pdfUrl: string;
  pdfName: string;
}

const PDF: React.FC<PDFViewProps> = ({ pdfUrl, pdfName }) => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Handle click to navigate to the PDF viewer page
  const openViewer = () => {
    navigate(
      `/pdf-viewer?url=${encodeURIComponent(pdfUrl)}&name=${encodeURIComponent(
        pdfName
      )}`
    );
  };

  return (
    <div className={styles.pdf_glass_item}>
      <p className={styles.name}>{pdfName}</p>
      <div className={styles.pdf_info} onClick={openViewer}>
        <img
          className={styles.icon}
          src="/study/web-images/pdf.png"
          alt="pdf icon"
        />
        <p className={styles.url}>{pdfUrl.split("/")[2]}</p>
      </div>
    </div>
  );
};

export default PDF;
