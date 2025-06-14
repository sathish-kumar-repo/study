import { domain } from "..";
import { ContentDataType } from "../../../Backend/model/content_model";
import { Media, Title } from "../../../Backend/UI";

const missingImages = new Set([37, 38, 74, 75]);

const vocabRanges = [
  { letter: "A", start: 1, end: 23 },
  { letter: "B", start: 24, end: 42 },
  { letter: "C", start: 43, end: 87 },
  { letter: "D", start: 88, end: 119 },
  { letter: "E", start: 120, end: 134 },
  { letter: "F", start: 135, end: 162 },
  { letter: "G", start: 163, end: 176 },
  { letter: "H", start: 177, end: 197 },
  { letter: "I", start: 198, end: 214 },
  { letter: "J", start: 215, end: 217 },
  { letter: "K", start: 218, end: 225 },
  { letter: "L", start: 226, end: 250 },
  { letter: "M", start: 251, end: 267 },
  { letter: "N", start: 268, end: 271 },
  { letter: "O", start: 272, end: 278 },
  { letter: "P", start: 279, end: 316 },
  { letter: "Q", start: 317, end: 320 },
  { letter: "R", start: 321, end: 361 },
  { letter: "S", start: 362, end: 436 },
  { letter: "T", start: 437, end: 468 },
  { letter: "U", start: 469, end: 477 },
  { letter: "V", start: 478, end: 480 },
  { letter: "W", start: 481, end: 503 },
  { letter: "Y", start: 504, end: 505 },
];

const vocabulary500in50minsContent: ContentDataType = {
  about: {
    subCategory: "English",
    name: "500 Vocabulary in 50 Mins",
    description:
      "Learn 500 English words fast — with clear Tamil explanations for beginners.",
    img: "500-vocabulary-in-50-mins.jpg",
  },
  route: [
    {
      topic: "Video",
      page: (
        <>
          <Title>Tutorial</Title>
          <Media src="https://youtu.be/STfaMGXOpg8?si=TpYxJsMI781YzGVk" />
        </>
      ),
    },
    ...vocabRanges.map(({ letter, start, end }) => {
      const src = [];
      for (let i = start; i <= end; i++) {
        if (!missingImages.has(i)) {
          src.push(`500 Vocabulary in 50 Mins/${i}.png`);
        }
      }

      return {
        topic: `Starting with ${letter}`,
        page: (
          <>
            <Title>Starting with {letter}</Title>
            <Media groupImg src={src} customDomain={domain} />
          </>
        ),
      };
    }),
    {
      topic: "Sample Test",
      page: (
        <>
          <Title>Sample Test</Title>
          <Media
            src="500 Vocabulary in 50 Mins/test/img.png"
            customDomain={domain}
          />
        </>
      ),
    },
  ],
};

export default vocabulary500in50minsContent;
