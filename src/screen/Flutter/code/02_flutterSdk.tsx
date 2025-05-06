import PDF from "../../../components/PDF/PDF";
import { Title, Table, Media } from "../../../components/UI";

export const FlutterSdk = () => {
  return (
    <>
      <Title>Flutter sdk</Title>
      <Table textAlign="center">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Col 1</td>
            <td>Row 1, Col 2</td>
            <td>Row 1, Col 3</td>
          </tr>
          <tr>
            <td>Row 2, Col 1</td>
            <td>Row 2, Col 2</td>
            <td>Row 2, Col 3</td>
          </tr>
        </tbody>
      </Table>{" "}
      <PDF file="dummy.pdf" name="something.pdf" />
      <Table file="weight_loss_plan.xlsx" textAlign="center" />
      <Media src={"https://youtu.be/9bZkp7q19f0?si=MkL1D6GwoekLX5uj"} />
      <Media src={"https://youtu.be/k3MseWHyUUE?si=t0FlDdiVR11DIQZQ"} />
    </>
  );
};
