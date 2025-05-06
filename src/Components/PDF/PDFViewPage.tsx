import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useSearchParams } from "react-router-dom";

const PDFViewerPage = () => {
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get("url") || "";

  //   const pdfName = queryParams.get("name") || "PDF Document";

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-viewer-page">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PDFViewerPage;
