import { Table, Title } from "../../../../../Backend/UI";

const TrackerUpdates = () => {
  return (
    <>
      <Title>Tracker Updates</Title>
      <Table file="excel/Healthy_Lifestyle.xlsx" textAlign="center" />
    </>
  );
};

export default TrackerUpdates;
