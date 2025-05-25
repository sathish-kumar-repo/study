import { Title, H1, Media, Table } from "../../../../../Backend/UI";
import { domain } from "../../content";

const AssetsAndOTC = () => {
  return (
    <>
      <Title>Assets and OTC</Title>

      <H1>Tutorial:</H1>
      <Media src="https://youtu.be/fgRfV2lilRY" />

      <H1>Asset:</H1>
      <Media customDomain={domain} src={"Part A/03 Asset and OTC/asset.png"} />

      <H1>OTC:</H1>
      <Media customDomain={domain} src={"Part A/03 Asset and OTC/OTC.png"} />

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
