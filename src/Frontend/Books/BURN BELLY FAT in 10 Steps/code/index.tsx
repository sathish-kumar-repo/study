import { H1, HL, List, Media, Title } from "../../../../Backend/UI";

const BurnBellyFat = () => {
  return (
    <>
      <Title>“BURN BELLY FAT” in 10 Steps!</Title>
      <Media src="https://youtu.be/p-y918t0PjE?si=9FAjTVMcjU21WB1m" />
      <H1>Steps</H1>
      <List
        type="ordered"
        items={[
          <>
            Understand the process (<HL>Fitness science</HL>)
          </>,
          <>
            Set target weight (<HL>Lose 1% of body weight weekly</HL>)
          </>,
          <>
            Set calories (<HL>Body weight * 2.2 * 12</HL> or{" "}
            <HL>Body weight * 2.2 * 10</HL>)
          </>,
          <>
            Calculate macros (<HL>30% protein</HL>, <HL>25% fat</HL>,{" "}
            <HL>45% carbs</HL>)
          </>,
          "Create sustainable diet",
          <>
            Use <HL>calorie tracking app</HL>
          </>,
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
          <>
            <HL>Wait</HL>, <HL>observe</HL> and <HL>adjust</HL>
          </>,
          <>
            <HL>Repeat</HL> till your <HL>target</HL>
          </>,
        ]}
      />
    </>
  );
};

export default BurnBellyFat;
