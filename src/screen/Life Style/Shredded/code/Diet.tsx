import { H, H1, List, Para, Table, Title } from "../../../../components/UI";

const Diet = () => {
  return (
    <>
      <Title>Diet</Title>
      <H1>Meal - 1</H1>
      <H>ABC Juice</H>
      <List items={["Apple (100g)",..]} />
      <Para>Apple (100g)</Para>
      <Para>Beetroot (100g)</Para>
      <Para>Carrot (100g)</Para>
      <Table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food Items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Early Morning Refreshment</td>
            <td>
              <H>ABC Juice</H>
              <Para>Apple (100g)</Para>
              <Para>Beetroot (100g)</Para>
              <Para>Carrot (100g)</Para>
            </td>
          </tr>
          <tr>
            <td>Breakfast</td>
            <td>
              <H>Pancake</H>
              <Para>Oats (40g)</Para>
              <Para>Skimmed Milk (50ml)</Para>
              <Para>Red Banana (100g)</Para>
              <Para>3 egg white (99g)</Para>
              <Para>2 whole egg (88g)</Para>
              <Para>Whey Protein 1 scoop (36g)</Para>
            </td>
          </tr>
          <tr>
            <td>Morning Snack</td>
            <td>
              <H>Yogurt Bowl</H>
              <Para>Strawberry (100g)</Para>
              <Para>10 Almond (12g)</Para>
              <Para>Greek Yogurt (200g)</Para>
            </td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>
              <H>Protein-Packed</H>
              <Para>Chapathi (100g)</Para>
              <Para>Chicken Breast (150g)</Para>
              <Para>10 Egg white (330g)</Para>
              <Para>Grapes (100g)</Para>
            </td>
          </tr>
          <tr>
            <td>Post Workout</td>
            <td>
              <H>Protein Shake</H>
              <Para>Whey Protein 1 scoop (36g)</Para>
            </td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>
              <H>Pancake</H>
              <Para>Oats (40g)</Para>
              <Para>Skimmed Milk (50ml)</Para>
              <Para>Red Banana (100g)</Para>
              <Para>3 egg white (99g)</Para>
              <Para>2 whole egg (88g)</Para>
              <Para>Whey Protein 1 scoop (36g)</Para>
            </td>
          </tr>
          <tr>
            <td>Before Bed</td>
            <td>
              <Para>Watermelon Juice</Para>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table file="diet_macros.xlsx" />
    </>
  );
};

export default Diet;
