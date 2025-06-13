import { domain } from "../../..";
import { H1, Para, Space, Media, List } from "../../../../../Backend/UI";

const Reference = () => {
  return (
    <>
      <H1>Step to Followed</H1>
      <List
        type="ordered"
        items={[
          "Disappear from this world",
          "Create an antivision",
          "Define your obstacles",
          "Create a new order",
        ]}
      />
      <H1>Video</H1>
      <Para link="https://youtu.be/YoeevdCQk9Q?si=ZqszPUXys0QtLh0X" />
      <Space sT={20} />
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 43,
          base: "Disappear 6 months/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default Reference;
