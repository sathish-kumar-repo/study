import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./page/App/App";
import Temp from "./page/temp/Temp";

createRoot(document.getElementById("root")!).render(<Temp />);
