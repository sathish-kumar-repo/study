import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n"; // Load i18n before rendering app
import App from "./page/App/App";

createRoot(document.getElementById("root")!).render(<App />);
