from main_data import fileList

# for index, file in enumerate(fileList):
#     words = file.split()
#     camel_case = "".join(word.capitalize() for word in words)
#     print(f"""import '../widgets/Widgets{index+1:02}_{file}.dart';""")
# for index, file in enumerate(fileList):
#     words = file.split()
#     camel_case = "".join(word.capitalize() for word in words)
#     print(
#         f"""   WidgetModel(
#     name: "{file} Widget",
#     route: "{file.lower()}",
#     builder: () => const {file}Widget(),
#   ),"""
#     )
# for index, file in enumerate(fileList):
#     words = file.split()
#     camel_case = "".join(word.capitalize() for word in words)
#     print(
#         f"""   {{
#       topic: "{file}",
#       page: <{camel_case} />,
#     }},"""
#     )
for index, file in enumerate(fileList):
    words = file.split()
    camel_case = "".join(word.capitalize() for word in words)
    print(
        f"""   {{
      topic: "{file} Widget",
      page: <{file}Widget />,
    }},"""
    )
