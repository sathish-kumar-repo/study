import "./Home.css";
import { useState } from "react";
import { description, footerMessage, heading } from "../../utils/message";
import { SocialMedia } from "./Components/SocialMedia";
import { Character } from "./Components/Character";
import { Header } from "../../Components/Header/Header";

export const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <Header />
        <div className="content">
          <h2>{heading}</h2>
          <p>{description}</p>
          <a
            href="#"
            // onClick={() => {
            //   onItemClick(folderKey[0]);
            //   setAtiveFolder(folderKey[0]);
            // }}
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
