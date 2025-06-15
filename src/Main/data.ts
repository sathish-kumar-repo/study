import webDevCurriculumContent from "../Frontend/Curriculum/content";
import flutterConceptContent from "../Frontend/Flutter/Concept/content";
import flutterWidgetsContent from "../Frontend/Flutter/Widgets/content";
import javaContent from "../Frontend/Java/content";
import shreddedContent from "../Frontend/Life Style/Shredded/content";
import binaryOptionPdfCollectionContent from "../Frontend/Trading/PDF/content";
import cssContent from "../Frontend/Web/CSS/content";
import mummaBinaryOptionContent from "../Frontend/Trading/Mumma Binary Options/content";
import ybtCwrvContent from "../Frontend/Trading/YBT CWRV/content";
import mummaPracticeContent from "../Frontend/Trading/Mumma Practice/content";
import ybtCwrvPracticeContent from "../Frontend/Trading/YBT CWRV Practice/content";
import seducerContent from "../Frontend/Books/9 Types of Seducers/content";
import englishSentenceContent from "../Frontend/Language/Sentence/content";
import dopamineDetoxContent from "../Frontend/Books/Dopamine Detox/content";
import hardDays75ChallengeContent from "../Frontend/Books/75 Days Hard Challenge For Discipline/content";
import disappear6monthsContent from "../Frontend/Books/Disappear for 6 Months/content";
import burnBellyFatContent from "../Frontend/Books/BURN BELLY FAT in 10 Steps/content";
import richDadPoorDadContent from "../Frontend/Books/Rich Dad & Poor Dad/content";
import ybtBinaryOptionsContent from "../Frontend/Trading/YBT Binary Options/content";
import eightRulesToBecomeDangerousContent from "../Frontend/Books/8 Rules to Become Dangerous/content";
import brainRules12Content from "../Frontend/Books/12 BRAIN RULES TO CHANGE YOUR LIFE/content";
import healthRules15ToChangeYourLifeContent from "../Frontend/Books/15 Health Rules to Change your Life/content";
import fundamentalRulesForHealthyLifestyleContent from "../Frontend/Books/Fundamental Rules for a Healthy Lifestyle/content";
import stop4ThingsImmediatelyContent from "../Frontend/Books/Four Things You Have To Stop Doing Immediately/content";
import vocabulary500in50minsContent from "../Frontend/Language/500 Vocabulary in 50 Mins";
import workoutRoutineContent from "../Frontend/Life Style/Workout Routine/content";
import thePsychologyOfMoneyContent from "../Frontend/Books/The Psychology of Money/content";
import sameAsEverContent from "../Frontend/Books/Same as Ever/content";
import thePowerOfSilenceSituation from "../Frontend/Books/THE POWER OF SILENCE Always Be Silent In These 5 Situations/content";

// The course data object
const mainData = {
  "Life Style": [shreddedContent, workoutRoutineContent],
  curriculum: [webDevCurriculumContent],
  books: [
    // Health & Fitness
    burnBellyFatContent,
    hardDays75ChallengeContent,
    healthRules15ToChangeYourLifeContent,
    fundamentalRulesForHealthyLifestyleContent,

    // Mindset & Self-Discipline
    eightRulesToBecomeDangerousContent,
    stop4ThingsImmediatelyContent,
    disappear6monthsContent,
    dopamineDetoxContent,
    thePowerOfSilenceSituation,

    // Brain & Learning
    brainRules12Content,

    // Wealth & Financial Wisdom
    richDadPoorDadContent,
    thePsychologyOfMoneyContent,
    sameAsEverContent,

    // Social & Relationship Skills
    seducerContent,
  ],
  trading: [
    mummaBinaryOptionContent,
    mummaPracticeContent,
    ybtCwrvContent,
    ybtCwrvPracticeContent,
    ybtBinaryOptionsContent,
    binaryOptionPdfCollectionContent,
  ],
  language: [englishSentenceContent, vocabulary500in50minsContent],
  programming: [
    // jsContent,
    // tsContent,
    javaContent,
    // pythonContent,
    // dfdfdfdfdfdflksdfndflf,
  ],
  // "python stack": [
  //   // pythonContent
  // ],
  "web development": [
    // htmlContent,
    cssContent,
    // sassContent,
    // bootstrapContent,
    // tailwindContent,
    // jsContent,
    // tsContent,
    // reactjsContent,
    // nodejsContent,
    // expressjsContent,
    // mongodbContent,
    // webFirebaseContent,
  ],
  flutter: [
    flutterConceptContent,
    flutterWidgetsContent,
    // flutterFirebaseContent,
  ],
  // db: [
  //   // flutterFirebaseContent,
  //   // mongodbContent,
  //   // webFirebaseContent
  // ],
  // "Version Control": [
  //   // githubContent
  // ],
  // maths: [mathsSem2Content],
};

export default mainData;
