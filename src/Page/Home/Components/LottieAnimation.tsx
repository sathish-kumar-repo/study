import Lottie from "lottie-react";
import data from "../../../assets/json/lottie.json";

const LottieAnimation = () => {
  return (
    <div className="imgBx">
      <Lottie animationData={data} loop={true} />
    </div>
  );
};

export default LottieAnimation;
