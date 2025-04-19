interface ImageItem {
  id: number;
  imgSrc: string;
  type: "image" | "video";
}

type GroupedImages = Record<string, Record<string, ImageItem[]>>;

const images = import.meta.glob<{ default: string }>(
  "/src/assets/*/*/*.{jpg,jpeg,png,webp,svg,gif,mp4}",
  { eager: true }
);

function getGroupedImg(): GroupedImages {
  const groupedData: GroupedImages = {};
  let id = 1;

  for (const [path, module] of Object.entries(images)) {
    const parts = path.split("/");
    const folderName = parts[parts.length - 3]; // Folder Name (main folder)
    const subfolderName = parts[parts.length - 2]; // Subfolder Name (could be a date or custom name)
    const fileName = parts[parts.length - 1]; // File Name

    // Ensure that the structure exists for the folder and subfolder
    if (!groupedData[folderName]) {
      groupedData[folderName] = {};
    }
    if (!groupedData[folderName][subfolderName]) {
      groupedData[folderName][subfolderName] = [];
    }

    // Push the image/video item to the appropriate subfolder
    groupedData[folderName][subfolderName].push({
      id: id++,
      imgSrc: module.default,
      type: fileName.endsWith(".mp4") ? "video" : "image", // Check if it's a video or image
    });
  }

  return groupedData;
}

export default getGroupedImg;
