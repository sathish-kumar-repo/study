import os
from main_data import fileList

folder_path = "src\Frontend\Flutter\Widgets\code"


for index, file in enumerate(fileList):
    folder_name = folder_path + "/" + f"{index+1:02}" + "_" + file

    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        print(f"Folder '{folder_name}' created.")
    else:
        print(f"Folder '{folder_name}' already exists.")

    file_path = os.path.join(folder_name, "index.tsx")

    words = file.split()
    camel_case = "".join(word.capitalize() for word in words)
    content = f"""import {{ A, H1, Space, Syntax, Title, List }} from "../../../../../Backend/UI";
import {{ domain }} from "../../content";

const {file}Widget = () => {{
  return (
    <>
      <Title>{file} Widget</Title>
      <H1>Project Preview</H1>
      <List
        main
        items={{[
        <>
          Interested in seeing the live demo?{{" "}}
          <A link="https://sathish-kumar-repo.github.io/Flutter-Widgets-Live/#/widget/{file.lower()}">
            Click here
          </A>{{" "}}
          to explore.
        </>,
        <>
          Want to view the source code? Visit the project on <A link="https://github.com/sathish-kumar-repo/flutter_widgets_live/blob/main/lib/widgets/Widgets{index+1:02}_{file}.dart">GitHub</A>.
        </>
        ]}}
      />

      <Space sB={{10}} />
      <Syntax customDomain={{domain}} src="Widgets{index+1:02}_{file}.dart" language="dart"/>
    </>
  );
}};

export default {file}Widget;
"""
    with open(file_path, "w") as f:
        f.write(content)
