import { H1, H2, Media, Title } from "../../../Backend/UI";
import { domain } from "../YBT Binary Options/01 Supply and Demand/content";

interface DayPracticeProps {
  title: string;
  path: string; // e.g., "YBT Supply and Demand/demo/Day 1"
  count: number; // total images, must be even (each Case-Result pair = 2)
}

const DayPractice: React.FC<DayPracticeProps> = ({ title, path, count }) => {
  if (count % 2 !== 0) {
    throw new Error(
      `DayPractice: Image count (${count}) must be even. Every "Case" must have a "Result".`
    );
  }
  const groups = [];

  for (let i = 1; i <= count; i += 2) {
    const caseIndex = i;
    const resultIndex = i + 1;
    const exampleNumber = Math.ceil(i / 2);

    groups.push(
      <div key={`group-${exampleNumber}`}>
        <H1>Example {exampleNumber}</H1>

        <H2>Market Condition</H2>
        <Media
          key={`media-case-${caseIndex}`}
          src={`${path}/${caseIndex}.png`}
          customDomain={domain}
        />

        <H2>Expected Reaction</H2>
        <Media
          key={`media-result-${resultIndex}`}
          src={`${path}/${resultIndex}.png`}
          customDomain={domain}
        />
      </div>
    );
  }

  return (
    <>
      <Title>{title}</Title>
      {groups}
    </>
  );
};

export default DayPractice;
