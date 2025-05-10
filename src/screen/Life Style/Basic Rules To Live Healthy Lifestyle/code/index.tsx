import { H1, H2, List, Space, Table, Title } from "../../../../components/UI";

const Rules = () => {
  return (
    <>
      <Title>Basic Rules to Live Healthy Lifestyle</Title>

      <H1>Five Basic Rules</H1>
      <List
        main
        type="ordered"
        items={[
          "Proper day routine",
          "Stop any negative addiction",
          "Train mentally and physically",
          "Optimize your intake",
          "Don’t be in comfort zone",
        ]}
      />

      <H1>Rules</H1>

      <H2>1. Day Routine</H2>
      <Table file="day_routine.xlsx" />

      <Space sB={15} />

      <H2>2. Stop any negative addiction </H2>
      <List main type="ordered" items={["Consuming lot of Entertainment"]} />

      <Space />

      <H2>3. Train mentally and physically</H2>
      <List
        main
        type="ordered"
        items={[
          "Consume self development or feed any positive things",
          "4 to 6 Days of resistance training and 1 day rest",
        ]}
      />

      <Space />

      <H2>4. Optimise your intake</H2>

      <List
        main
        // glass
        type="ordered"
        items={[
          "Avoid sweet and sugar",
          "Avoid junk and processed food",
          "Avoid unhealthy fats",
          "Drink 5 liters of water",
          "Follow a healthy diet",
        ]}
      />

      <Space />

      <H2>5. Don’t be in Comfort zone</H2>
      <List
        main
        type="ordered"
        items={[
          "Follow discipline",
          "Consistency over perfection",
          "First health next work",
        ]}
      />
    </>
  );
};

export default Rules;
