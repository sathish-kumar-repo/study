import { H1, Media, Table, Title } from "../../../../../components/UI";
import asset from "./img/asset.png";
import otc from "./img/OTC.png";

const AssetsAndOTC = () => {
  return (
    <>
      <Title>Assets and OTC</Title>

      <H1>Asset:</H1>
      <Media src={asset} />

      <H1>OTC:</H1>
      <Media src={otc} />

      <H1>Option Moneyness:</H1>
      <Table>
        <thead>
          <tr>
            <th>Option Type</th>
            <th>Description</th>
            <th>Outcome</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ATM</td>
            <td>At the money</td>
            <td>Neutral</td>
            <td>The account has been refunded.</td>
          </tr>
          <tr>
            <td>ITM</td>
            <td>In the money</td>
            <td>Profit</td>
            <td>There is money in the account</td>
          </tr>
          <tr>
            <td>OTM</td>
            <td>Out the money</td>
            <td>Loss</td>
            <td>Money is out of the account.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AssetsAndOTC;
