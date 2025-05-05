import GR from "./GR.jpg";
import UK from "./UK.jpg";
import IT from "./IT.jpg";
import RU from "./RU.jpg";
import BR from "./BR.jpg";
import RO from "./RO.jpg";
import PT from "./PT.jpg";
import FR from "./FR.jpg";
import ES from "./ES.jpg";
import DE from "./DE.jpg";

// Define the structure for each language flag object
export const flags: Record<string, { name: string; img: string }> = {
  GR: {
    name: "GR",
    img: GR,
  },
  EN: {
    name: "UK",
    img: UK,
  },
  IT: {
    name: "IT",
    img: IT,
  },
  RU: {
    name: "RU",
    img: RU,
  },
  BR: {
    name: "BR",
    img: BR,
  },
  RO: {
    name: "RO",
    img: RO,
  },
  PT: {
    name: "PT",
    img: PT,
  },
  FR: {
    name: "FR",
    img: FR,
  },
  ES: {
    name: "ES",
    img: ES,
  },
  DE: {
    name: "DE",
    img: DE,
  },
};
