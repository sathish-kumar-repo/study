import { H1, List, Title } from "../../../../components/UI";

const Rules = () => {
  return (
    <>
      <Title>Basic Rules to Live Healthy Lifestyle</Title>

      <H1>Follow Rules</H1>
      <List
        type="ordered"
        items={[
          {
            text: "Proper day routine",
          },
          { text: "Stop any negative addiction" },
          { text: "Train mentally and physically" },
          {
            text: "Optimize your intake",
          },
          { text: "Don’t be in comfort zone" },
        ]}
      />
    </>
  );
};

export default Rules;
