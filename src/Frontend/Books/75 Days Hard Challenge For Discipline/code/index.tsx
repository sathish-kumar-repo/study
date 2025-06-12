import {
  H1,
  List,
  Note,
  Para,
  Quote,
  Space,
  Title,
} from "../../../../Backend/UI";

const HardDays75Challenge = () => {
  return (
    <>
      <Title>75 Days Hard Challenge For Discipline</Title>
      <H1>Feel Pain to Make Life Easier</H1>
      <List
        items={[
          "Consume approximately 4 liters of water daily",
          {
            text: "Commit to 90 minutes of physical training each day",
            children: [
              {
                text: "45 minutes Outdoor Workout",
                children: [
                  {
                    text: "Engage in activities under natural sunlight and fresh air",
                    children: ["Jogging", "Cardio", "Cycling"],
                  },
                ],
              },
              {
                text: "45 minutes Indoor Workout",
                children: [
                  "Strength training with equipment",
                  "Bodyweight exercises",
                ],
              },
            ],
          },
          "Adhere strictly to a clean and healthy diet",
          "Capture a daily progress photo",
          "Read a minimum of 10 pages from a non-fiction book",
          "Eliminate your old, destructive habits",
          "No compromises, no excuses—zero tolerance for cheating",
        ]}
      />
      <H1>The Mental Phases You’ll Face</H1>
      <List
        items={[
          "Day 1 - 25 (Unbearable)",
          {
            text: "Day 25 - 50 (Uncomfortble)",
            children: ["Life found its way to make you forget about this"],
          },
        ]}
      />
      <Space sT={20} />
      <Quote>I have done these Hard things nothing is impossible now</Quote>
      <Quote>SELF CONFIDENCE SELF WORTH AND SELF BELIEF WILL BE HIGH</Quote>
      <Space sT={20} />
      <Note>
        <b>What if you fail ?</b> Start over—no shortcuts.
      </Note>
      <Space sT={20} />
      <Para link="https://youtu.be/ZmXMgxAEM-8?si=dAVEuQnpNlc_g9IC" />
    </>
  );
};

export default HardDays75Challenge;
