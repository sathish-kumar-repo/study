import { A, H1, Space, Syntax, Title, List } from "../../../../../Backend/UI";
import { domain } from "../../content";

const TableWidget = () => {
  return (
    <>
      <Title>Table Widget</Title>
      <H1>Project Preview</H1>
      <List
        main
        items={[
        <>
          Interested in seeing the live demo?{" "}
          <A link="https://sathish-kumar-repo.github.io/Flutter-Widgets-Live/#/widget/table">
            Click here
          </A>{" "}
          to explore.
        </>,
        <>
          Want to view the source code? Visit the project on <A link="https://github.com/sathish-kumar-repo/flutter_widgets_live/blob/main/lib/widgets/Widgets193_Table.dart">GitHub</A>.
        </>
        ]}
      />

      <Space sB={10} />
      <Syntax customDomain={domain} src="Widgets193_Table.dart" language="dart"/>
    </>
  );
};

export default TableWidget;
