// ContentMain.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ContentMainProps {
  previousTopic: string | null;
  nextTopic: string | null;
  handleNavigation: (topic: string | null) => void;
}

const ContentMain: React.FC<ContentMainProps> = ({
  previousTopic,
  nextTopic,
  handleNavigation,
}) => {
  return (
    <div className="content-main">
      <Outlet />
      <div className="navigation-buttons">
        <div
          className={`navigation-button ${
            previousTopic ? "active" : undefined
          }`}
          onClick={() => handleNavigation(previousTopic)}
        >
          <ArrowBackIosIcon />
          <span>Previous</span>
        </div>

        <div
          className={`navigation-button ${nextTopic ? "active" : undefined}`}
          onClick={() => handleNavigation(nextTopic)}
        >
          <span>Next</span>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
