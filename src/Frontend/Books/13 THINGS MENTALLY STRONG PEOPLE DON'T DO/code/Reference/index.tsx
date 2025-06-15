import { domain } from "../../..";
import { H1, List, Media, Para, Space, Title } from "../../../../../Backend/UI";

const Reference = () => {
  return (
    <>
      <Title>HOW TO OVERCOME DEPRESSION</Title>
      <H1>Situations</H1>
      <List
        items={[
          "They don't feel sorry for themselves",
          "They Don't focus on the things they cannot control",
          "They don't shy away from change",
          "They don't try to please everyone",
        ]}
      />
      <H1>Video</H1>
      <Para link="https://youtu.be/AjEvBCkYyPM?si=b1fVeCD4hcVW_kL6" />
      <Space sT={20} />
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 1,
          base: "13 THINGS MENTALLY STRONG PEOPLE DON'T DO/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default Reference;
