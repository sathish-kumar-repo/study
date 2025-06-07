import { Lang, Title } from "../../../../../Backend/UI";

const DailySentenceInLife = () => {
  return (
    <>
      <Title>Daily Sentence In Life</Title>
      <Lang sentences={sentence} />
    </>
  );
};

export default DailySentenceInLife;

const sentence = [
  { eng: "Does he work with you?", tam: "அவர் உங்களுடன் வேலை செய்கிறாரா?" },
  { eng: "Does she have a car?", tam: "அவளிடம் கார் இருக்கிறதா?" },
  { eng: "Does it snow in winter?", tam: "குளிர்காலத்தில் பனி உண்டா?" },
  {
    eng: "Does your dog live outside or in the house?",
    tam: "உங்கள் நாய் வெளியே அல்லது வீட்டில் வசிக்கிறதா?",
  },
  {
    eng: "Does your sister always talk so much on the phone?",
    tam: "உங்கள் சகோதரி எப்போதும் தொலைபேசியில் இவ்வளவு பேசுகிறாரா?",
  },
  {
    eng: "Why does she always scream like that?",
    tam: "அவள் ஏன் எப்போதும் அப்படி கத்துகிறாள்?",
  },
  { eng: "Do it for me", tam: "எனக்காக செய்" },
  { eng: "I am for that", tam: "அதற்காக நான்" },
  { eng: "Is it for me?", tam: "இது எனக்கானதா?" },
  { eng: "What's it for?", tam: "இது எதற்காக?" },
  { eng: "I came for you", tam: "நான் உங்களுக்காக வந்தேன்" },
  { eng: "Is it for her?", tam: "அது அவளுக்கு தானா?" },
  { eng: "That's for you", tam: "அது உங்களுக்காக" },
  { eng: "I paid for them", tam: "நான் அவர்களுக்கு பணம் கொடுத்தேன்" },
  {
    eng: "So why don't you do the ordering for tomorrow as usual?",
    tam: "எனவே வழக்கம்போல நாளைக்கான ஆர்டரை ஏன் செய்யக்கூடாது?",
  },
  {
    eng: "I'm only about a year older than Janaki",
    tam: "நான் ஜானகியை விட ஒரு வருடம் மட்டுமே மூத்தவன்",
  },
  { eng: "It's exquisite.", tam: "இது நேர்த்தியானது." },
  {
    eng: "Where did you get this, Pavithara?",
    tam: "பவித்ரா, இது எங்கிருந்து கிடைத்தது?",
  },
  {
    eng: "Do you like this fellow?",
    tam: "இந்த நபரை நீங்கள் விரும்புகிறீர்களா?",
  },
  {
    eng: "You should not be surprised by that",
    tam: "அதைக் கண்டு நீங்கள் ஆச்சரியப்படக்கூடாது",
  },
  {
    eng: "I think I can honestly say it",
    tam: "நான் அதை நேர்மையாக சொல்ல முடியும் என்று நினைக்கிறேன்",
  },
  {
    eng: "He hadn't seen Lakshmi was there too.",
    tam: "லட்சுமியும் அங்கே இருப்பதை அவர் பார்த்ததில்லை.",
  },
  {
    eng: "She looked as if nothing had happened",
    tam: "எதுவும் நடக்காதது போல் அவள் பார்த்தாள்",
  },
  {
    eng: "I didn't know they would come back",
    tam: "அவர்கள் திரும்பி வருவார்கள் என்று எனக்குத் தெரியவில்லை.",
  },
  {
    eng: "I don't know why I was afraid of.",
    tam: "நான் ஏன் பயந்தேன் என்று எனக்குத் தெரியவில்லை.",
  },
  {
    eng: "That's where I deserve to be",
    tam: "அங்குதான் நான் இருக்க தகுதியானவன்",
  },
  { eng: "How can I make amends?", tam: "நான் எப்படி பரிகாரம் செய்யலாம்?" },
  { eng: "Don't get too close to her", tam: "அவளுடன் ரொம்ப நெருங்க வேண்டாம்" },
  {
    eng: "Do I ask too many questions?",
    tam: "நான் பல கேள்விகளைக் கேட்கிறேனா?",
  },
  { eng: "Not at all", tam: "இல்லவே இல்லை" },
  {
    eng: "She didn't want to go as far as this.",
    tam: "அவள் இவ்வளவு தூரம் செல்ல விரும்பவில்லை",
  },
  { eng: "It's time to take decision", tam: "முடிவெடுக்கும் நேரம் இது" },
  {
    eng: "I can assure you he will",
    tam: "அவர் செய்வார் என்று நான் உங்களுக்கு உறுதியளிக்கிறேன்",
  },
  {
    eng: "What makes you so confident?",
    tam: "உங்களுக்கு அவ்வளவு நம்பிக்கையூட்டுவது எது?",
  },
  {
    eng: "Haven't you told Chitra yet?",
    tam: "நீங்கள் இன்னும் சித்ராவிடம் சொல்லவில்லையா?",
  },
  {
    eng: "He always has been in the past",
    tam: "அவர் எப்போதும் கடந்த காலத்தில் இருப்பார்",
  },
  { eng: "May I come as well?", tam: "அத்துடன் நானும் வரலாமா?" },
  { eng: "How can I be of assistance", tam: "நான் எவ்வாறு உதவ முடியும்" },
  { eng: "It may take a few days", tam: "இதற்கு சில நாட்கள் ஆகலாம்" },
  { eng: "You were magnificent", tam: "நீங்கள் அற்புதமாக இருந்தீர்கள்" },
  { eng: "You know what?", tam: "உனக்கு என்னவென்று தெரியுமா?" },
  {
    eng: "Why didn't we go direct to him in the first?",
    tam: "முதலில் நாம் ஏன் அவரிடம் நேரடியாகச் செல்லவில்லை?",
  },
  {
    eng: "Why didn't you tell me earlier?",
    tam: "ஏன் முன்பே என்னிடம் சொல்லவில்லை?",
  },
  {
    eng: "I can't be expected to do that",
    tam: "நான் அதை செய்வேன் என்று எதிர்பார்க்க முடியாது",
  },
  {
    eng: "I've been so blind as well as stupid.",
    tam: "நான் மிகவும் குருடனாகவும் முட்டாளாகவும் இருந்தேன்.",
  },
];
