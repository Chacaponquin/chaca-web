export const DEFAULT_API_SCHEMA = {
  id: { type: "module", module: "id.uuid", isKey: true },
  username: { type: "module", module: "internet.username" },
  email: { type: "module", module: "internet.email" },
  description: { type: "module", module: "lorem.paragraph" },
}
