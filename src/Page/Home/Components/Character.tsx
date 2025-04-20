import Lottie from "lottie-react";
import data from "./lottie.json";

export const Character = () => {
  return (
    <div className="imgBx">
      <Lottie animationData={data} loop={true} />
    </div>
  );
};
