import "./NoResultFound.css";
import Lottie from "react-lottie";
import animationData from "../../assets/json/no-result-found.json";

const NoResultFound = () => {
  return (
    <div className="no-courses-message">
      <Lottie
        options={{ animationData: animationData }}
        height={150}
        width={150}
      />
      <h2>No Courses Found</h2>
      <p>We couldn't find any courses that match your search or selection.</p>
    </div>
  );
};

export default NoResultFound;
