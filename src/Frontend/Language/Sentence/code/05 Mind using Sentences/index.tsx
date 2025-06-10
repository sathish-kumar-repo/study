import { Lang, Para, Space, Title } from "../../../../../Backend/UI";

const MindUsingSentences = () => {
  return (
    <>
      <Title>Mind using Sentences</Title>
      <Para>
        Mind என்றால் மனம் உணர்வு, எண்ணம் என்று பல அர்த்தங்கள் இருந்தாலும் அது
        பல்வேறு சூழ்ந்லையில் எவ்வாறு மாறுபடுகிறது என்பதை கவனிக்கவும்
      </Para>
      <Space sT={20} />
      <Lang sentences={sentence} />
    </>
  );
};

export default MindUsingSentences;

const sentence = [
  {
    eng: "He is broad minded",
    tam: "அவர் பரந்த மனப்பான்மை கொண்டவர்",
  },
  {
    eng: "He is narrow minded",
    tam: "அவர் குறுகிய மனப்பான்மை கொண்டவர்",
  },
  {
    eng: "He is mean minded",
    tam: "அவர் அல்ப புத்தி உடையவர்",
  },
  {
    eng: "Mind your business",
    tam: "நீ உன் வேலையை கவனி",
  },
  {
    eng: "Mind your own business",
    tam: "நீ உன் வேலையை கவனி",
  },
  {
    eng: "Mind the steps",
    tam: "படிகட்டுகளில் கவனமாக ஏறுங்கள்",
  },
  {
    eng: "Mind your words",
    tam: "கவனமாகப் பேசு",
  },
  {
    eng: "Mind your tongue",
    tam: "நாவை அடக்கிப் பேசு",
  },
  {
    eng: "Mind your language",
    tam: "நாவை அடக்கிப் பேசி.",
  },
  {
    eng: "Bear in mind",
    tam: "ஞாபகத்தில் வைத்துக்கொள்.",
  },
];
