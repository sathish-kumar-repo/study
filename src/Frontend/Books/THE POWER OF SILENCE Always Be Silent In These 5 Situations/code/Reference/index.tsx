import { domain } from "../../..";
import { H1, List, Media, Para, Title } from "../../../../../Backend/UI";

const Reference = () => {
  return (
    <>
      <Title>
        THE POWER OF SILENCE | Always Be Silent In These 5 Situations | stocism
      </Title>
      <H1>Situations</H1>
      <List
        items={[
          "When dealing with angers",
          "When dealing with rumours",
          "When others do not value your words",
          {
            text: "Four Obtacles by (The Story of four Monks)",
            children: [
              "Distractions",
              "Pointing out others mistakes",
              "Anger",
              "Blowing their own trumpet",
            ],
          },
          "When people insult or boast around you",
        ]}
      />
      <H1>Video</H1>
      <Para link="https://youtu.be/PYw0jvRJJoU?si=NSRn-ITP97QxJ5QN" />
      <Media
        groupImg
        sequence={{
          start: 1,
          end: 45,
          base: "THE POWER OF SILENCE Always Be Silent In These 5 Situations/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default Reference;
