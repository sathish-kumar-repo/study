import webDevCurriculumContent from "../Frontend/Curriculum/content";
import englishContent from "../Frontend/Language/01 Sentence/content";
import flutterConceptContent from "../Frontend/Flutter/Concept/content";
import flutterWidgetsContent from "../Frontend/Flutter/Widgets/content";
import javaContent from "../Frontend/Java/content";
import basicRulesToLiveHealthyLifestyleContent from "../Frontend/Life Style/Basic Rules To Live Healthy Lifestyle/content";
import shreddedContent from "../Frontend/Life Style/Shredded/content";
import BinaryOptionContent from "../Frontend/Trading/BinaryOptions/content";
import cwrvContent from "../Frontend/Trading/CWRV/content";
import binaryOptionPdfCollectionContent from "../Frontend/Trading/PDF/content";
import cssContent from "../Frontend/Web/CSS/content";

// The course data object
const mainData = {
  "Life Style": [basicRulesToLiveHealthyLifestyleContent, shreddedContent],
  curriculum: [webDevCurriculumContent],
  trading: [BinaryOptionContent, cwrvContent, binaryOptionPdfCollectionContent],
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
