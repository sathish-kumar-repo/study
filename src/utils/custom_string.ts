export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

export function formatName(name: string): string {
  return name.includes("_") ? name.replace(/_/g, " ") : name;
}
