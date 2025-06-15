import { domain } from "../../..";
import { H1, List, Media, Para, Space, Title } from "../../../../../Backend/UI";

const Reference = () => {
  return (
    <>
      <Title>5 Powerful Qualities Silent People</Title>
      <H1>Qualities:</H1>
      <List
        type="ordered"
        items={[
          "Silence increases value to your words.",
          "It helps you to be the last person you speak.",
          "Silence can increase your focus.",
          "It helps to understand others true intentions.",
          "A silent winner is better than a famous failure.",
        ]}
      />
      <H1>Video</H1>
      <Para link="https://youtu.be/KpfFjLB4ITE?si=X1j_CBk81KIavemN" />
      <Space sT={20} />
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 1,
          base: "5 Powerful Qualities Silent People/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default Reference;
