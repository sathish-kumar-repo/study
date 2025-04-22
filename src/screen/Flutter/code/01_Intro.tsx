import MediaDisplay from "../../../components/Media/Media";
import { H1, H2, List, Para, Title } from "../../../components/UI";
import flutter from "./flutter.png";
import demo from "./demo.gif";

const IntroFlutter = () => {
  return (
    <>
      <Title>Flutter Overview</Title>

      <H1>Intro</H1>
      <Para>
        Readme Changelog Example Installing Versions Scores intro A step-by-step
        wizard, which can help you to introduce your product or to demonstrate
        the usage of your application.
      </Para>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint,
        repudiandae velit labore placeat numquam nulla temporibus dolorum beatae
        consequatur recusandae eum consectetur dicta culpa sed perspiciatis?
        Officia, veniam nihil?
      </Para>

      <H1>Features</H1>
      <List
        type="ordered"
        items={[
          {
            text: "Step by step demonstration",
          },
          { text: "Control the demo flow" },
          { text: "Highlight the target widget" },
          {
            text: "Automatically calculates the location and alignment of intro card",
          },
          { text: "Customizable style and behavior" },
          { text: "Full platform support" },
        ]}
      />

      <H1>Demo</H1>
      <MediaDisplay src={flutter} />
      <MediaDisplay src={demo} />

      <H1>Getting Started</H1>
      <Para>Add this package to your project.</Para>
    </>
  );
};

export default IntroFlutter;
