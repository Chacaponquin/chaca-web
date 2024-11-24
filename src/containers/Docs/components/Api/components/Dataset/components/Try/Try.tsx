import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  const body = JSON.stringify(
    {
      User: {
        schema: {
          id: { type: "sequence" },
          username: { type: "module", module: "internet.username" },
          email: { type: "module", module: "internet.email" },
        },
        count: 3,
      },
      Product: {
        schema: {
          id: { type: "sequence" },
          title: { type: "module", module: "lorem.words" },
          price: {
            type: "module",
            module: "datatype.float",
            params: { precision: 2, min: 0.2, max: 100 },
          },
        },
        count: 5,
      },
    },
    undefined,
    3,
  )

  return (
    <TryRoute result="json" body={body} url="api/v1/dataset" method="post" initFetch params={[]} />
  )
}
