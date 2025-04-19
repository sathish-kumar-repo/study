import Gallery from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { useState } from "react";

function App() {
  const [activeFolder, setAtiveFolder] = useState("Home");

  if (activeFolder == "Home")
    return (
      <Home
        onItemClick={(selectedFolder) => setAtiveFolder(selectedFolder)}
        defaultSelectedFolder={activeFolder}
      />
    );
  else {
    return (
      <Gallery
        onItemClick={(selectedFolder) => setAtiveFolder(selectedFolder)}
        defaultSelectedFolder={activeFolder}
      />
    );
  }
}

export default App;
