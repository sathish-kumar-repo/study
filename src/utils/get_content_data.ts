import mainData from "../data/main_data";
import { ContentDataType } from "../model/content_model";

function getContentData(): ContentDataType[] {
  // This function returns the content data from the courseData object
  const contentData = Object.values(mainData).flat();
  return contentData;
}

export default getContentData;
