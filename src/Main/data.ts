import webDevCurriculumContent from "../Frontend/Curriculum/content";
import flutterConceptContent from "../Frontend/Flutter/Concept/content";
import flutterWidgetsContent from "../Frontend/Flutter/Widgets/content";
import javaContent from "../Frontend/Java/content";
import basicRulesToLiveHealthyLifestyleContent from "../Frontend/Life Style/Basic Rules To Live Healthy Lifestyle/content";
import shreddedContent from "../Frontend/Life Style/Shredded/content";
import binaryOptionPdfCollectionContent from "../Frontend/Trading/PDF/content";
import cssContent from "../Frontend/Web/CSS/content";
import lifeRulesContent from "../Frontend/Books/Rules/content";
import mummaBinaryOptionContent from "../Frontend/Trading/Mumma Binary Options/content";
import ybtCwrvContent from "../Frontend/Trading/YBT CWRV/content";
import mummaPracticeContent from "../Frontend/Trading/Mumma Practice/content";
import ybtBinaryOptionsContent from "../Frontend/Trading/YBT Binary Options/01 Supply and Demand/content";
import ybtCwrvPracticeContent from "../Frontend/Trading/YBT CWRV Practice/content";
import seducerContent from "../Frontend/Books/9 Types of Seducers/content";
import englishContent from "../Frontend/Language/Sentence/content";
import dopamineDetoxContent from "../Frontend/Books/Dopamine Detox/content";
import hardDays75ChallengeContent from "../Frontend/Books/75 Days Hard Challenge For Discipline/content";
import disappear6monthsContent from "../Frontend/Books/Disappear for 6 Months/content";
import burnBellyFatContent from "../Frontend/Books/BURN BELLY FAT in 10 Steps/content";

// The course data object
const mainData = {
  "Life Style": [basicRulesToLiveHealthyLifestyleContent, shreddedContent],
  curriculum: [webDevCurriculumContent],
  books: [
    burnBellyFatContent,
    lifeRulesContent,
    seducerContent,
    dopamineDetoxContent,
    hardDays75ChallengeContent,
    disappear6monthsContent,
  ],
  trading: [
    mummaBinaryOptionContent,
    mummaPracticeContent,
    ybtCwrvContent,
    ybtCwrvPracticeContent,
    ybtBinaryOptionsContent,
    binaryOptionPdfCollectionContent,
  ],
  language: [englishContent],
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
