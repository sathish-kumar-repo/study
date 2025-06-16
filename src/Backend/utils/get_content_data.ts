import mainData from "../../Main/data";
import { ContentDataType, TopicType } from "../model/content_model";

function getContentData(): ContentDataType[] {
  const contentData = Object.values(mainData)
    .flat()
    .map((item: any) => ({
      ...item,
      route: Array.isArray(item.route)
        ? item.route.map((routeItem: any) => ({
            ...routeItem,
            type: routeItem.type as TopicType | undefined,
          }))
        : undefined, // Keep it undefined if not an array
    }));

  return contentData as ContentDataType[];
}

export default getContentData;
