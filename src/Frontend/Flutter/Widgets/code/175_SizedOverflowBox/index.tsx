import { A, H1, Space, Syntax, Title, List } from "../../../../../Backend/UI";
import { domain } from "../../content";

const SizedOverflowBoxWidget = () => {
  return (
    <>
      <Title>SizedOverflowBox Widget</Title>
      <H1>Project Preview</H1>
      <List
        main
        items={[
        <>
          Interested in seeing the live demo?{" "}
          <A link="https://sathish-kumar-repo.github.io/Flutter-Widgets-Live/#/widget/sizedoverflowbox">
            Click here
          </A>{" "}
          to explore.
        </>,
        <>
          Want to view the source code? Visit the project on <A link="https://github.com/sathish-kumar-repo/flutter_widgets_live/blob/main/lib/widgets/Widgets175_SizedOverflowBox.dart">GitHub</A>.
        </>
        ]}
      />

      <Space sB={10} />
      <Syntax customDomain={domain} src="Widgets175_SizedOverflowBox.dart" language="dart"/>
    </>
  );
};

export default SizedOverflowBoxWidget;
