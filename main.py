import os
from main_data import fileList

folder_path = "src\Frontend\Web\JS\code"


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
    content = f"""import {{ Title }} from "../../../../../Backend/UI";

const {camel_case} = () => {{
  return (
    <>
      <Title>{file}</Title>
    </>
  );
}};

export default {camel_case};
"""
    with open(file_path, "w") as f:
        f.write(content)
