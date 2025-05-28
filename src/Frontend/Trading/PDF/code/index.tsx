import { H1, PDF, Title } from "../../../../Backend/UI";
import { domain } from "../content";

const cwrv = [
  "CWRV- Candle Wicks Reading with Volume.pdf",
  "CWRV - by - LMBO.pdf",
  "cwrv.pdf",
];
const general = [
  "Binary-Options-Trading-Bible.pdf",
  "Candlestick-Pattern-Cheat-Sheet.pdf",
  "Chart Pattern & Candlesticks Clear .PDF",
  "pattern.pdf",
  "Trading Patterns Guide.pdf",
  "BinaryOptionsTradingChecklist.pdf",
  "BOOKBASICTRADINGGUIDEV2-2.pdf",
  "Service_Agreement_QTX.pdf",
];
const mumma = [
  "17 Candle Formations.pdf",
  "Candlestick Charts Part-I.pdf",
  "candlestickpattern.pdf",
  "candlesticks.pdf",
  "Options Trading For Newbies.pdf",
  "Technical Analysis Of The Financial Markets - John J Murphy.pdf",
  "Technical Analysis.pdf",
  "trading .pdf",
  "Trading guide (1).pdf",
];

const BinaryOptionPdfCollection = () => {
  return (
    <>
      <Title>PDF</Title>

      <H1>General Pdf</H1>
      {general.map((file) => (
        <PDF key={file} customDomain={domain} file={`general/${file}`} />
      ))}

      <H1>By Mumma</H1>
      {mumma.map((file) => (
        <PDF key={file} customDomain={domain} file={`mumma/${file}`} />
      ))}

      <H1>CWRV</H1>
      {cwrv.map((file) => (
        <PDF key={file} customDomain={domain} file={`cwrv/${file}`} />
      ))}
    </>
  );
};

export default BinaryOptionPdfCollection;
