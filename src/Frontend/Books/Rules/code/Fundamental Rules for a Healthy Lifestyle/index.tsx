import {
  Title,
  H1,
  H2,
  Space,
  List,
  Table,
  Para,
  Quote,
} from "../../../../../Backend/UI";

const FundamentalRulesForHealthyLifestyle = () => {
  return (
    <>
      <Title>Fundamental Rules for a Healthy Lifestyle</Title>
      <Para>
        A healthy lifestyle isn’t about temporary changes—it's about building
        strong daily habits that support your physical, mental, and emotional
        well-being. The following five rules provide a simple yet powerful
        framework to achieve lasting health and vitality.
      </Para>

      <H1>Top 5 Foundational Principles</H1>
      <List
        type="ordered"
        items={[
          "Establish a consistent daily routine",
          "Eliminate negative addictions",
          "Strengthen both mind and body",
          "Optimize dietary habits",
          "Embrace discomfort and growth",
        ]}
      />

      <H1>Detailed Guidelines</H1>

      <H2>1. Establish a Consistent Daily Routine</H2>
      <Table file="excel/day_routine.xlsx" />

      <Space sB={15} />

      <H2>2. Eliminate Negative Addictions</H2>
      <List
        type="ordered"
        items={[
          "Reduce or eliminate excessive entertainment consumption",
          "Avoid mindless scrolling and digital distractions",
          "Avoid porn and masturbation-induced dopamine spikes",
          "Avoid unwanted dopamine spikes from short-term pleasures",
          "Detach from substances or behaviors that diminish well-being",
          "Set screen time boundaries, especially before bed",
        ]}
      />

      <Space />

      <H2>3. Strengthen Both Mind and Body</H2>
      <List
        type="ordered"
        items={[
          "Engage in daily personal development (reading, journaling, etc.)",
          "Incorporate resistance training 4–6 days per week with 1 rest day",
          "Practice mindfulness or meditation regularly",
        ]}
      />

      <Space />

      <H2>4. Optimize Dietary Habits</H2>
      <List
        type="ordered"
        items={[
          "Limit or eliminate added sugars and sweetened products",
          "Avoid junk food and heavily processed meals",
          "Minimize unhealthy fats (trans fats, excess fried items)",
          "Consume at least 5 liters of water daily",
          "Follow a nutrient-rich, balanced diet plan",
        ]}
      />

      <Space />

      <H2>5. Embrace Discomfort to Grow</H2>
      <List
        type="ordered"
        items={[
          "Build self-discipline through intentional challenges",
          "Prioritize consistency over perfection",
          "Put your health before everything else—it's the foundation of success",
        ]}
      />

      <H1>Bonus: Additional Keys to Longevity</H1>
      <List
        type="unordered"
        items={[
          "Sleep 7–8 hours consistently",
          "Get 15 minutes of morning sunlight daily",
          "Cultivate meaningful relationships",
          "Practice gratitude and journaling",
          "Regularly unplug from noise and reflect",
          "Keep learning and stay mentally active",
        ]}
      />

      <Quote>
        "Discipline is choosing between what you want now and what you want
        most." – Abraham Lincoln
      </Quote>
    </>
  );
};

export default FundamentalRulesForHealthyLifestyle;
