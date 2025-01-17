export const DEFAULT_API_DATASET = {
  user: {
    schema: {
      id: {
        type: "module",
        module: "id.uuid",
        isKey: true,
      },
      username: {
        type: "module",
        module: "internet.username",
      },
    },
    count: 10,
  },
  product: {
    schema: {
      id: { type: "module", module: "id.uuid", isKey: true },
      userId: { type: "ref", ref: "user.id" },
    },
    count: 20,
  },
}
