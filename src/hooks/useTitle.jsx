export function useTitle(title) {
  const appName = "Hidoc - ";
  return (document.title = appName + title);
}
