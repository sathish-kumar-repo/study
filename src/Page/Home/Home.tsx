import "./Home.css";
import { useState } from "react";
import { description, footerMessage, heading } from "../../utils/message";
import { SocialMedia } from "./Components/SocialMedia";
import { Character } from "./Components/Character";
import { Header } from "../../Components/Header/Header";
import groupedData from "../../utils/get_image";

type HomeProps = {
  defaultSelectedFolder: string;
  onItemClick: (selectedFolder: string) => void;
};

export const Home = ({ onItemClick, defaultSelectedFolder }: HomeProps) => {
  const folderKey = Object.keys(groupedData());
  const [activeFolder, setAtiveFolder] = useState(defaultSelectedFolder);

  return (
    <section>
      <div className="container">
        <Header
          onItemClick={(selectedFolder) => {
            onItemClick(selectedFolder);
            setAtiveFolder(selectedFolder);
          }}
          activeFolder={activeFolder}
          list={folderKey}
        />

        <div className="content">
          <h2>{heading}</h2>
          <p>{description}</p>
          <a
            href="#"
            onClick={() => {
              onItemClick(folderKey[0]);
              setAtiveFolder(folderKey[0]);
            }}
          >
            My Memories..
          </a>
        </div>
        <Character />
        <SocialMedia />
        <p className="copyrightText">{footerMessage}</p>
      </div>
    </section>
  );
};
