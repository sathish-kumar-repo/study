import { Lang } from "../../../Backend/UI";

const YourTitle = () => {
  return (
    <>
      <Lang sentences={sentence} type="Table" />
    </>
  );
};

export default YourTitle;
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

[
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
[
  {
    eng: "I want to be with my mother",
    tam: "நான் என் அம்மாவுடன் இருக்க விரும்புகிறேன்",
  },
  { eng: "Then why did you go out?", tam: "பிறகு ஏன் வெளியே சென்றீர்கள்?" },
  { eng: "Why did you leave me?", tam: "ஏன் என்னை விட்டு சென்றாய்?" },
  { eng: "fairies", tam: "வனதேவதை" },
  { eng: "I might like it.", tam: "நான் அதை விரும்பலாம்." },
  {
    eng: "I won't stand for it now",
    tam: "நான் இப்போது அதற்காக நிற்க மாட்டேன்",
  },
  { eng: "Don't do this to me!", tam: "இதை என்னிடம் செய்ய வேண்டாம்!" },
  { eng: "No one guided him", tam: "யாரும் அவரை வழிநடத்தவில்லை" },
  {
    eng: "Yet I am afraid to touch that",
    tam: "இன்னும் நான் அதைத் தொட பயப்படுகிறேன்",
  },
  {
    eng: "I have to go for a few nights",
    tam: "நான் சில இரவுகள் செல்ல வேண்டும்",
  },
  { eng: "I have no choice in this.", tam: "இதில் எனக்கு வேறு வழியில்லை." },
  { eng: "His voice trailed off", tam: "அவரது குரல் பின்வாங்கியது" },
  { eng: "He looked like weary", tam: "அவர் சோர்வுற்றவர் போல் இருந்தார்" },
  { eng: "How many nights?", tam: "எத்தனை இரவுகள்?" },
  { eng: "Don't taunt me.", tam: "என்னை கேலி செய்யாதே." },
  { eng: "It wasn't two days ago", tam: "இது இரண்டு நாட்களுக்கு முன்பு இல்லை" },
  {
    eng: "Sir, please open up these mysteries to me,",
    tam: "ஐயா, தயவுசெய்து இந்த மர்மங்களை எனக்குத் திறந்து விடுங்கள்.",
  },
  { eng: "I was at a loss.", tam: "நான் நஷ்டத்தில் இருந்தேன்." },
  { eng: "I have done it already", tam: "நான் ஏற்கனவே செய்துள்ளேன்" },
  { eng: "What have you done?", tam: "நீங்கள் என்ன செய்தீர்கள்?" },
  { eng: "I clung to his shoulder", tam: "நான் அவன் தோளில் ஒட்டிக்கொண்டேன்" },
  { eng: "Don't cling to me", tam: "என்னிடம் ஒட்டிக்கொள்ளாதே" },
  {
    eng: "You won't tell me what you do?",
    tam: "நீங்கள் என்ன செய்கிறீர்கள் என்று சொல்ல மாட்டீர்களா?",
  },
  {
    eng: "Since you already asked them",
    tam: "நீங்கள் ஏற்கனவே அவர்களிடம் கேட்டதால்",
  },
  {
    eng: "I will just wait for your answers.",
    tam: "உங்கள் பதில்களுக்காக நான் காத்திருப்பேன்.",
  },
  { eng: "No, nothing like that.", tam: "இல்லை, அப்படி எதுவும் இல்லை." },
  {
    eng: "That's not the proper attitude to have.",
    tam: "பெறுவதற்கு அது சரியான அணுகுமுறை அல்ல.",
  },
  { eng: "Even better actually", tam: "உண்மையில் இன்னும் சிறப்பாக" },
  { eng: "How did it happen?", tam: "அது நடந்தது எப்படி?" },
  { eng: "But she didn't go far.", tam: "ஆனால் அவள் வெகுதூரம் செல்லவில்லை" },
  { eng: "What's wrong with her?", tam: "அவளிடம் என்ன தவறு இருக்கிறது?" },
  {
    eng: "I am afraid I can't discuss that",
    tam: "நான் அதைப் பற்றி விவாதிக்க முடியாது என்று பயப்படுகிறேன்.",
  },
  { eng: "I was speechless.", tam: "நான் பேசாமல் இருந்தேன்." },
  { eng: "He snatched from me", tam: "அவர் என்னிடமிருந்து பறித்தார்" },
  {
    eng: "I don't know what you mean",
    tam: "நீங்கள் என்ன சொல்கிறீர்கள் என்று எனக்குத் தெரியவில்லை",
  },
  { eng: "I was totally in fear", tam: "நான் முற்றிலும் பயத்தில் இருந்தேன்" },
  { eng: "you cannot judge me!", tam: "நீங்கள் என்னை மதிப்பிடு முடியாது!" },
  {
    eng: "I don't care what she's done",
    tam: "அவள் என்ன செய்தாள் என்று எனக்கு கவலையில்லை",
  },
  { eng: "But where do we go now?", tam: "ஆனால் இப்போது நாம் எங்கே போவோம்?" },
  { eng: "Come down with me", tam: "என்னுடன் கீழே வாருங்கள்" },
  { eng: "I was spellbound", tam: "நான் மந்திரத்தால் கட்டுப்பட்டிருந்தேன்" },
  { eng: "So be it", tam: "எனவே அப்படியே இருங்கள்" },
  {
    eng: "You don't even pick up his rings",
    tam: "நீங்கள் அவரது மோதிரங்களை கூட எடுக்க வேண்டாம்",
  },
  { eng: "All eyes were on me.", tam: "எல்லா கண்களும் என்மீது இருந்தன." },
  {
    eng: "They don't care about me,",
    tam: "அவர்கள் என்னைப் பொருட்படுத்தவில்லை",
  },
  {
    eng: "You stumbled at your dance.",
    tam: "உங்கள் நடனத்தில் தடுமாறினீர்கள்.",
  },
  {
    eng: "She caressed the girl's forehead",
    tam: "அவள் பெண்ணின் நெற்றியைப் வருடினாள்",
  },
  {
    eng: "Don't plunge into such devotions yourself.",
    tam: "இதுபோன்ற பக்திகளில் நீங்களே மூழ்காதீர்கள்.",
  },
  {
    eng: "I could see panic in their faces",
    tam: "அவர்களின் முகங்களில் பீதியை என்னால் காண முடிந்தது",
  },
  { eng: "What kind of sweet is that?", tam: "அது என்ன வகையான இனிப்பு?" },
  { eng: "The music abruptly stopped.", tam: "இசை திடீரென நின்றுவிட்டது." },
  {
    eng: "Don't treat my guest in that manner.",
    tam: "என் விருந்தினரை அந்த வகையில் நடத்த வேண்டாம்.",
  },
  { eng: "He wants to see you", tam: "அவர் உங்களைப் பார்க்க விரும்புகிறார்" },
  {
    eng: "Don't ask such daft questions",
    tam: "இதுபோன்ற முட்டாள்தனமான கேள்விகளைக் கேட்க வேண்டாம்",
  },
  { eng: "I wouldn't say that", tam: "நான் அதை சொல்ல மாட்டேன்" },
  { eng: "Who goes there?", tam: "யார் அங்கு செல்கிறார்கள்?" },
  {
    eng: "You wanted to see me, sir?",
    tam: "நீங்கள் என்னைப் பார்க்க விரும்பினீர்களா, ஐயா?",
  },
  {
    eng: "Did you make yourself clear?",
    tam: "உங்களை நீங்களே தெளிவுபடுத்தினீர்களா?",
  },
  {
    eng: "Where do you have to go today?",
    tam: "இன்று நீங்கள் எங்கு செல்ல வேண்டும்?",
  },
  {
    eng: "How many shirts do I have to buy to get one free?",
    tam: "ஒன்றை இலவசமாகப் பெற நான் எத்தனை சட்டைகளை வாங்க வேண்டும்?",
  },
  {
    eng: "Why did you have to see the doctor?",
    tam: "நீங்கள் ஏன் மருத்துவரை சந்திக்க வேண்டியிருந்தது?",
  },
  {
    eng: "Why did they have to leave?",
    tam: "அவர்கள் ஏன் வெளியேற வேண்டியிருந்தது?",
  },
  {
    eng: "How long will I have to take this medication?",
    tam: "இந்த மருந்தை நான் எவ்வளவு நேரம் எடுக்க வேண்டும்?",
  },
  {
    eng: "When will she have to be there?",
    tam: "அவள் எப்போது இருக்க வேண்டும்?",
  },
  {
    eng: "What time must we be there?",
    tam: "நாம் எந்த நேரத்தில் அங்கு இருக்க வேண்டும்?",
  },
  {
    eng: "What kind of music do you listen to?",
    tam: "எந்த வகையான இசையை நீங்கள் கேட்கின்றீர்கள்?",
  },
  {
    eng: "Which painting do you like the best?",
    tam: "எந்த ஓவியத்தை நீங்கள் சிறந்ததாக விரும்புகிறீர்கள்?",
  },
  {
    eng: "Whose parents are coming to the meeting tomorrow?",
    tam: "நாளை யாருடைய பெற்றோர் கூட்டத்திற்கு வருகிறார்கள்?",
  },
  { eng: "How much money do you have?", tam: "உங்களிடம் எவ்வளவு பணம் உள்ளது?" },
  {
    eng: "How far is your house from the school?",
    tam: "பள்ளியிலிருந்து உங்கள் வீடு எவ்வளவு தூரம்?",
  },
  {
    eng: "Who did you go to the party with?",
    tam: "நீங்கள் யாருடன் விருந்துக்குச் சென்றீர்கள்?",
  },
  { eng: "Who are you talking to?", tam: "நீங்கள் யாருடன் பேசுகிறீர்கள்?" },
  {
    eng: "What are you talking about?",
    tam: "நீங்கள் எதை பற்றி பேசுகிறிர்கள்?",
  },
  { eng: "Where is Meena from?", tam: "மீனா எங்கிருந்து வருகிறார்?" },
  {
    eng: "What did you say that for?",
    tam: "அதற்காக நீங்கள் என்ன சொன்னீர்கள்?",
  },
  {
    eng: "What kind of place do you live in?",
    tam: "நீங்கள் எந்த வகையான இடத்தில் வசிக்கிறீர்கள்?",
  },
];
