// This is just to make the filesystem more readable tbh
export function filenameToTitle(slug: string) {
  const parts = slug.split("-");
  if (parts.length != 3) {
    return slug;
  }
  return `${parts[1]}-${parts[2]}-${parts[0]}`;
}

export function titleToFilename(slug: string) {
  const parts = slug.split("-");
  if (parts.length != 3) {
    return slug;
  }
  return `${parts[2]}-${parts[0]}-${parts[1]}`;
}
