import { List, Title } from "../../../../Backend/UI";

const BurnBellyFat = () => {
  return (
    <>
      <Title></Title>
      <List
        type="ordered"
        items={[
          "Understand the process (Fitness science)",
          "Set target weight (gain or lose 1% of body weight weekly)",
          "Set calories (Body weight * 2.2 * 12 or Body weight * 2.2 * 10)",
          "Calculate macros (30% protein, 25% fat, 45% carbs)",
          "Create sustainable diet",
          "Use calorie tracking app",
          "Training & cardio",
          {
            text: "Track your progress",
            children: [
              "Calorie intake",
              "Protein intake",
              "Calories burned",
              "Your morning weight",
            ],
          },
          "Wait, observe and adjust",
          "Repeat till your target",
        ]}
      />
    </>
  );
};

export default BurnBellyFat;
