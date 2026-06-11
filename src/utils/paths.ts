export const withBase = (path: string) => {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return cleanPath ? `${cleanBase}${cleanPath}` : cleanBase;
};
