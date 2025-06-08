import { domain } from "../../..";
import { H1, Media, Para, PDF, Space, Title } from "../../../../../Backend/UI";

const Reference = () => {
  return (
    <>
      <Title>9 Types Of Seducers</Title>
      <H1>PDF</H1>
      <PDF
        file={"9 Types of Seducers/pdf/The Art of Seduction PDF.pdf"}
        customDomain={domain}
      />
      <H1>Video</H1>
      <Para link="https://youtu.be/YoeevdCQk9Q?si=ZqszPUXys0QtLh0X" />
      <Space sT={20} />
      <Media
        sequence={{
          start: 1,
          end: 83,
          base: "9 Types of Seducers/",
          ext: "png",
        }}
        customDomain={domain}
      />
    </>
  );
};

export default Reference;
