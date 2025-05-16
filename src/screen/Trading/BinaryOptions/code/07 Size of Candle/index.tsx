import { H1, Media, Table, Title } from "../../../../../components/UI";

const SizeOfCandle = () => {
  return (
    <>
      <Title>Size of Candle</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/H1X4P7puQ_w" />

      <H1>Description:</H1>
      <Table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Week candle</td>
            <td>Similar to Doji but Little bit Size body</td>
          </tr>
          <tr>
            <td>Small candle</td>
            <td>Well compared to weak</td>
          </tr>
          <tr>
            <td>Medium candle</td>
            <td>Normal size body</td>
          </tr>
          <tr>
            <td>Strong candle</td>
            <td>Well size body</td>
          </tr>
          <tr>
            <td>Abnormal candle</td>
            <td>Biggest candle in the market</td>
          </tr>
        </tbody>
      </Table>
      <Media src={"Binary Options/Part A/07 Size of Candle/2.png"} />
    </>
  );
};

export default SizeOfCandle;
