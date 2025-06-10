import { Lang, List, Para, Title } from "../../../../../Backend/UI";

const AnswerToSomeone = () => {
  return (
    <>
      <Title>Answer to Someone</Title>
      <Lang sentences={sentence} />
      <Para>
        Who? (ஊ) என்ற கேள்வி வரும்போது Somebody (சம்படி), Anybody (எனிபடி),
        Everybody (எவ்வெரிபடி) முதலிய பதில்களை சொல்ல வேண்டிய அவசியம் ஏற்படும்.
        ஆகவே அந்த ஆங்கில வார்த்தைகளுக்கான தமிழ் அர்த்தங்களை நன்கு நினைவு
        படுத்திக் கொள்ளவும்.
      </Para>
      <List
        items={[
          "Somebody - யாரோ ஒருவர் அல்லது முன்பின் தெரியாத நபர்.",
          "Anybody - யாரேனும் ஒருவர்.",
          "Everybody - ஒவ்வொரு நபரும்.",
        ]}
      />
    </>
  );
};

export default AnswerToSomeone;

const sentence = [
  { eng: "Yes", tam: "ஆமாம்" },
  { eng: "No", tam: "இல்லை" },
  { eng: "Nothing", tam: "ஒன்றுமில்லை" },
  { eng: "Oh yes", tam: "சரி" },
  { eng: "O.k", tam: "சரி,பரவாயில்லை, ஆகட்டும்" },
  { eng: "That's all", tam: "அவ்வளவுதான்" },
  { eng: "Quite right", tam: "முற்றிலும் சரி" },
  { eng: "All right", tam: "பரவாயில்லை, சரி" },
  { eng: "Nothing to worry", tam: "கவலைப்பட ஒன்றுமில்லை" },
  { eng: "It's all right", tam: "பரவாயில்லை" },
  { eng: "Certainly", tam: "நிச்சயமாக" },
  { eng: "Surely", tam: "நிச்சயமாக" },
  { eng: "Indeed", tam: "உண்மையில்" },
  { eng: "Of course", tam: "உண்மையில்" },
  { eng: "It's too bad", tam: "ரொம்ப மோசம்" },
  { eng: "Tt's too late", tam: "காலம் கடந்து விட்டது" },
  { eng: "It seems so", tam: "அப்படித்தான் தெரிகிறது" },
  { eng: "It appears so", tam: "அப்படித்தான் தோன்றுகிறது" },
  { eng: "I think so", tam: "அப்படித்தான் நினைக்கிறேன்" },
  { eng: "I hope so", tam: "அப்படித்தான் நம்புகிறேன்" },
  { eng: "I believe so", tam: "அப்படித்தான் நம்புகிறேன்" },
  { eng: "I don't think so", tam: "நான் அப்படி நினைக்கவில்லை" },
  { eng: "I don't believe so", tam: "நான் அப்படி நம்பவில்லை" },
  { eng: "It doesn't seem so", tam: "அப்படித் தெரியவில்லை" },
  { eng: "It doesn't appear so", tam: "அப்படித் தோன்றவில்லை" },
];
