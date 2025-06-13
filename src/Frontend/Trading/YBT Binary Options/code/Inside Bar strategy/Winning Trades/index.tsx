import { Media, Title } from "../../../../../../Backend/UI";
import { domain } from "../../../content";

const WinningTradesInsideBar = () => {
  return (
    <>
      <Title>Winning Trades</Title>
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 8,
          base: "Inside Bar Strategy/demo/win/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default WinningTradesInsideBar;
