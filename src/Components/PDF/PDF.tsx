import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useState } from "react";
import styles from "./PDF.module.css";

interface PDFViewProps {
  pdfUrl: string;
  pdfName: string;
}
const PDF: React.FC<PDFViewProps> = ({ pdfUrl, pdfName }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [isOpen, setIsOpen] = useState(false);

  const openViewer = () => setIsOpen(true);
  const closeViewer = () => setIsOpen(false);

  return (
    <>
      <div className="pdf-glass-item" onClick={openViewer}>
        {/* <FileText className="pdf-icon" /> */}
        <span>{pdfName}</span>
      </div>

      {/* {isOpen && ( */}
      <div className={styles.model}>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
      {/* )} */}
    </>
  );
};

export default PDF;
