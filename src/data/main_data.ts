import BinaryOptionContent from "../screen/Trading/BinaryOptions/content";
import flutterContent from "../screen/Flutter/content";
import basicRulesToLiveHealthyLifestyleContent from "../screen/Life Style/Basic Rules To Live Healthy Lifestyle/content";
import shreddedContent from "../screen/Life Style/Shredded/content";
import mathsSem2Content from "../screen/Maths/Sem 2/content";
import cwrvContent from "../screen/Trading/CWRV/content";

// The course data object
const mainData = {
  "Life Style": [basicRulesToLiveHealthyLifestyleContent, shreddedContent],
  trading: [BinaryOptionContent, cwrvContent],
  maths: [mathsSem2Content],
  flutter: [
    flutterContent,
    flutterContent,
    flutterContent,
    flutterContent,
    flutterContent,


  ],
};

export default mainData;
