import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import styles from "./PDF.module.css";

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
    <div className="pdf-glass-item" onClick={openViewer}>
      <span>{pdfName}</span>
    </div>
  );
};

export default PDF;
