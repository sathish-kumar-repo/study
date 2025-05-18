import flutterConceptContent from "../Frontend/Flutter/Concept/content";
import flutterFirebaseContent from "../Frontend/Flutter/Firebase/content";
import flutterWidgetsContent from "../Frontend/Flutter/Widgets/content";
import githubContent from "../Frontend/Github/content";
import javaContent from "../Frontend/Java/content";
import basicRulesToLiveHealthyLifestyleContent from "../Frontend/Life Style/Basic Rules To Live Healthy Lifestyle/content";
import shreddedContent from "../Frontend/Life Style/Shredded/content";
import pythonContent from "../Frontend/Python Stack/Python/content";
import BinaryOptionContent from "../Frontend/Trading/BinaryOptions/content";
import cwrvContent from "../Frontend/Trading/CWRV/content";
import bootstrapContent from "../Frontend/Web/Bootstrap/content";
import cssContent from "../Frontend/Web/CSS/content";
import webDevCurriculumContent from "../Frontend/Web/Curriculum/content";
import expressjsContent from "../Frontend/Web/ExpressJs/content";
import webFirebaseContent from "../Frontend/Web/Firebase/content";
import htmlContent from "../Frontend/Web/HTML/content";
import jsContent from "../Frontend/Web/JS/content";
import mongodbContent from "../Frontend/Web/MongoDB/content";
import nodejsContent from "../Frontend/Web/NodeJs/content";
import reactjsContent from "../Frontend/Web/ReactJs/content";
import sassContent from "../Frontend/Web/SASS/content";
import tailwindContent from "../Frontend/Web/Tailwind/content";
import tsContent from "../Frontend/Web/TS/content";

// The course data object
const mainData = {
  "Life Style": [basicRulesToLiveHealthyLifestyleContent, shreddedContent],
  curriculum: [webDevCurriculumContent],
  trading: [BinaryOptionContent, cwrvContent],
  language: [jsContent, tsContent, javaContent, pythonContent],
  "python stack": [pythonContent],
  "web development": [
    htmlContent,
    cssContent,
    sassContent,
    bootstrapContent,
    tailwindContent,
    jsContent,
    tsContent,
    reactjsContent,
    nodejsContent,
    expressjsContent,
    mongodbContent,
    webFirebaseContent,
  ],
  flutter: [
    flutterConceptContent,
    flutterWidgetsContent,
    flutterFirebaseContent,
  ],
  db: [flutterFirebaseContent, mongodbContent, webFirebaseContent],
  "Version Control": [githubContent],
  // maths: [mathsSem2Content],
};

export default mainData;
