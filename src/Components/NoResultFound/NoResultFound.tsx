import React from "react";
import "./NoResultFound.css";
import Lottie from "react-lottie";
import animationData from "../../assets/json/no-result-found.json";

interface NoResultFoundProps extends React.HTMLAttributes<HTMLDivElement> {
  searchTerm: string;
}

const NoResultFound: React.FC<NoResultFoundProps> = ({
  searchTerm,
  ...props
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="no-courses-message" {...props}>
      <div className="message-lottie">
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
      <div className="message">
        <h5>Sorry, we couldn't find any results "{searchTerm}"</h5>
        <p>Try adjusting your search. Here are some ideas:</p>
        <ul>
          <li>Make sure all words are spelled correctly</li>
          <li>Try different search terms</li>
          <li>Try more general search terms</li>
        </ul>
      </div>
    </div>
  );
};

export default NoResultFound;
