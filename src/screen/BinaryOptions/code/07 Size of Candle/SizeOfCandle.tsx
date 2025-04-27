import { Table, Title } from "../../../../components/UI";

const SizeOfCandle = () => {
  return (
    <>
      <Title>Size of Candle</Title>
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
    </>
  );
};

export default SizeOfCandle;
