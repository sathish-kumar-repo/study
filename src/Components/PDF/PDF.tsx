import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import styles from "./style.module.css";

interface PDFViewProps {
  file: string;
  name?: string;
}

const PDF: React.FC<PDFViewProps> = ({ file, name = "Refrence" }) => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Handle click to navigate to the PDF viewer page
  const openViewer = () => {
    navigate(`/pdf-viewer?file=${encodeURIComponent(file)}`);
  };

  return (
    <div className={styles.pdf_glass_item}>
      <p className={styles.name}>{name}</p>
      <div className={styles.pdf_info} onClick={openViewer}>
        <img
          className={styles.icon}
          src="/study/web-images/pdf.png"
          alt="pdf icon"
        />
        <p className={styles.url}>{file}</p>
      </div>
    </div>
  );
};

export default PDF;
