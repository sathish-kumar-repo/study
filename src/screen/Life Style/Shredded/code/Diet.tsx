import { H, H1, List, Para, Title } from "../../../../components/UI";

const Diet = () => {
  return (
    <>
      <Title>Diet</Title>

      <H1>🌅 Meal - 1 (Early Morning Refreshment)</H1>
      <H>ABC Juice</H>
      <List items={["Apple (100g)", "Beetroot (100g)", "Carrot (100g)"]} />

      <H1>🍳 Meal - 2 (Breakfast)</H1>
      <H>Pancake</H>
      <List
        items={[
          "Oats (40g)",
          "Skimmed Milk (50ml)",
          "Red Banana (100g)",
          "3 egg white (99g)",
          "2 whole egg (88g)",
          "Whey Protein 1 scoop (36g)",
        ]}
      />

      <H1>🍎 Meal - 3 (Morning Snack)</H1>
      <H>Yohurt Bowl</H>
      <List
        items={["Strawberry (100g)", "10 Almond (12g)", "Greek Yogurt (200g)"]}
      />

      <H1>🥗 Meal - 4 (Lunch)</H1>
      <H>Protein Paked</H>
      <List
        items={[
          "Chapathi (100g)",
          "Chicken Breast (150g)",
          "10 Egg white (330g)",
          "Grapes (100g)",
        ]}
      />

      <H1>🏋️‍♂️ Meal -5 (Post Workout)</H1>
      <H>Protein Shake</H>
      <List items={["Whey Protein 1 scoop (36g)"]} />

      <H1>🍽️ Meal - 6 (Dinner)</H1>
      <H> Pancake</H>
      <List
        items={[
          "Oats (40g)",
          "Skimmed Milk (50ml)",
          "Red Banana (100g)",
          "3 egg white (99g)",
          "2 whole egg (88g)",
          "Whey Protein 1 scoop (36g)",
        ]}
      />

      <H1>🌙 Meal - 7 (Hydratration Juice)</H1>
      <H>Watermelon Juice</H>
      <List items={["Watermelon Juice (350ml)"]} />

      <H1>Total Macros</H1>

      <Para tab={false}>🔥 Calories (kcal): 2499kcal</Para>
      <Para tab={false}>🍗 Protein (g): 234g</Para>
      <Para tab={false}>🍞 Carbohydrates (g): 264.3g</Para>
      <Para tab={false}>🥜 Fat (g): 57.5g</Para>
      <Para tab={false}>🌾 Fiber (g): 40.1g</Para>
    </>
  );
};

export default Diet;
