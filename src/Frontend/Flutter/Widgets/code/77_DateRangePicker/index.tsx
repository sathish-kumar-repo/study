import { A, H1, Space, Syntax, Title, List } from "../../../../../Backend/UI";
import { domain } from "../../content";

const DateRangePickerWidget = () => {
  return (
    <>
      <Title>DateRangePicker Widget</Title>
      <H1>Project Preview</H1>
      <List
        items={[
          <>
            Interested in seeing the live demo?{" "}
            <A link="https://sathish-kumar-repo.github.io/Flutter-Widgets-Live/#/widget/daterangepicker">
              Click here
            </A>{" "}
            to explore.
          </>,
          <>
            Want to view the source code? Visit the project on{" "}
            <A link="https://github.com/sathish-kumar-repo/flutter_widgets_live/blob/main/lib/widgets/Widgets77_DateRangePicker.dart">
              GitHub
            </A>
            .
          </>,
        ]}
      />

      <Space sB={10} />
      <Syntax
        customDomain={domain}
        src="Widgets77_DateRangePicker.dart"
        language="dart"
      />
    </>
  );
};

export default DateRangePickerWidget;
