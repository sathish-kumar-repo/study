export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

export function formatName(name: string): string {
  return name.includes("_") ? name.replace(/_/g, " ") : name;
}

export function toSnakeCase(input: string): string {
  return input
    .trim() // Remove extra whitespace from both ends
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "_"); // Replace all spaces with underscores
}
