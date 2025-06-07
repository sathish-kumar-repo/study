import { List, Media, Space, Title } from "../../../../../Backend/UI";

const Stop4ThingsImmediately = () => {
  return (
    <>
      <Title>Four Things You Have To Stop Doing Immediately</Title>
      <Media src="https://youtube.com/shorts/IXfYcfwc45E?si=Y8qYL6IvYgbc9p30" />
      <Space sT={20} />
      <List
        items={[
          "Stop regretting the past.",
          "Stop wory about the future.",
          "Stop looking for your happiness in other people.",
          "Stop underestimating your inner strength.",
        ]}
      />
    </>
  );
};

export default Stop4ThingsImmediately;
