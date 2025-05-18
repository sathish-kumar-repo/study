import { H1, H2, HL, List, Note, Para, Title } from "../../../../Backend/UI";

const IntroFlutter = () => {
  return (
    <>
      <Title>Flutter Overview</Title>

      <H1>Intro</H1>
      <Para>
        Readme <b>Changelog</b> <u>Installing</u> <i>Example</i> <s>Versions</s>
        <HL>ddf</HL>
        Versions Scores intro A step-by-step wizard, which can help you to
        introduce your product or to demonstrate the usage of your application.
      </Para>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint,
        repudiandae velit labore placeat numquam nulla temporibus dolorum beatae
        consequatur recusandae eum consectetur dicta culpa sed perspiciatis?
        Officia, veniam nihil?
      </Para>

      <H1>Features</H1>
      <H2>Simple is one of th word</H2>
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

      <H1>Getting Started</H1>
      <Para>Add this package to your project.</Para>
      <Note>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        dolorem ullam, quidem officia corporis assumenda quas iusto cupiditate,
        eligendi aliquam sunt optio eius facilis, hic error laboriosam maxime
        quo? Dicta.
      </Note>
    </>
  );
};

export default IntroFlutter;
