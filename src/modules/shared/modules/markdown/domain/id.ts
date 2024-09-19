export function generateId(text: string) {
  return text.replace(/[^A-Za-z0-9_-]/g, "")
}
