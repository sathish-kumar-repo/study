import mainData from "../../Main/data";
import { ContentDataType, TopicType } from "../model/content_model";

function getContentData(): ContentDataType[] {
  // This function returns the content data from the courseData object
  const contentData = Object.values(mainData)
    .flat()
    .map((item: any) => ({
      ...item,
      route: item.route.map((routeItem: any) => ({
        ...routeItem,
        // Cast or convert 'type' to TopicType if it exists
        type: routeItem.type as TopicType | undefined,
      })),
    }));
  return contentData as ContentDataType[];
}

export default getContentData;
