import AnswerToSomeone from "../code/01 Answer to Someone";
import BasicEnglishSentence from "../code/02 Basic English Sentence";
import DailySentenceInLife from "../code/03 Daily Sentence In Life";
import DialyUseEnglishSentence from "../code/04 Daily use English Sentence";
import MindUsingSentences from "../code/05 Mind using Sentences";

const englishSentenceContent = {
  about: {
    subCategory: "English",
    name: "English Sentences with Tamil",
    description:
      "Learn spoken and written English easily with sentence-based lessons explained in Tamil.",
    img: "en-sentence.jpeg",
  },
  route: [
    {
      topic: "Answer to Someone",
      page: <AnswerToSomeone />,
    },
    {
      topic: "Basic English Sentence",
      page: <BasicEnglishSentence />,
    },
    {
      topic: "Daily Sentence In Life",
      page: <DailySentenceInLife />,
    },
    {
      topic: "Daily use English Sentence",
      page: <DialyUseEnglishSentence />,
    },
    {
      topic: "Mind using Sentences",
      page: <MindUsingSentences />,
    },
  ],
};

export default englishSentenceContent;
