from main_data import fileList

for index, file in enumerate(fileList):
    words = file.split()
    camel_case = "".join(word.capitalize() for word in words)
    print(
        f"""   {{
      topic: "{file}",
      page: <{camel_case} />,
    }},"""
    )
