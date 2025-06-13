import { H1, H2, Media } from "../../../Backend/UI";
import { domain } from "../PDF/content";

interface DayPracticeProps {
  title: number;
  path: string;
  conditionCount?: number;
  reactionCount?: number;
}

const DayPractice: React.FC<DayPracticeProps> = ({
  title,
  path,
  conditionCount = 1,
  reactionCount = 1,
}) => {
  const component = [];

  component.push(<H1 key="title">{title}</H1>);
  component.push(<H2 key="condition-heading">Market Condition</H2>);
  for (let i = 1; i <= conditionCount; i++) {
    component.push(
      <Media
        key={`media-case-${i}`}
        src={`${path}/Case/${i}.png`}
        customDomain={domain}
      />
    );
  }

  component.push(<H2 key="reaction-heading">Expected Reaction</H2>);
  for (let i = 1; i <= reactionCount; i++) {
    component.push(
      <Media
        key={`media-reaction-${i}`}
        src={`${path}/Result/${i}.png`}
        customDomain={domain}
      />
    );
  }

  return <>{component}</>; // ✅ Use a fragment to wrap the list
};

export default DayPractice;
