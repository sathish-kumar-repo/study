import { H1, H2, List, Para, Title } from "../../../components/UI";

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
      <H1>Features</H1>

      <List
        type="ordered"
        items={[
          {
            text: "lorem5",
            children: [
              {
                text: "lorem5",
                children: [
                  { text: "lorem5" },
                  { text: "lorem5" },
                  { text: "lorem5" },
                ],
              },
              { text: "lorem5" },
            ],
          },
          { text: "lorem5", children: [{ text: "lorem5" }] },
          { text: "lorem5" },
        ]}
      />
      <H2>Heading 2</H2>
    </>
  );
};

export default IntroFlutter;
