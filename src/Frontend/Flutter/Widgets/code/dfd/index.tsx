import { A, H1, Para, Space, Syntax, Title } from "../../../../../Backend/UI";
import { domain } from "../../content";

const YourTitle = () => {
  return (
    <>
      <Title>Title</Title>
      <H1>Live Demo</H1>
      <Para>
        Interested in seeing the live demo?{" "}
        <A link="https://sathish-kumar-repo.github.io/Flutter-Widgets-Live/#/widget/aboutdialog">
          Click here
        </A>{" "}
        to explore.
      </Para>

      <Space sB={10} />
      <Syntax customDomain={domain} src="Widgets01_AboutDialog.dart" />
    </>
  );
};

export default YourTitle;
