export function setUrl(str: string) {
  return `/${str.toLowerCase().replace(/\s+/g, "-")}/`;
}
