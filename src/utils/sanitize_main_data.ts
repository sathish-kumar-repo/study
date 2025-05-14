import { ContentDataType } from "../model/content_model";

// Universal sanitize function
export function sanitizeMainData<
  T extends { [key: string]: ContentDataType[] }
>(data: T, replaceChar = "-"): T {
  const sanitizedData = {} as T;

  for (const key in data) {
    sanitizedData[key] = data[key].map((content) => ({
      ...content,
      route: content.route.map((item) => ({
        ...item,
        topic: item.topic.replace(/\//g, replaceChar), // Replacing all '/' with replaceChar
      })),
    })) as T[Extract<keyof T, string>]; // Explicitly cast to maintain the same type structure
  }

  return sanitizedData;
}
