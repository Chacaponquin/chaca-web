import { TryRoute } from "@containers/Docs/shared/components"

export default function Try() {
  return (
    <TryRoute
      result="json"
      body={"{}"}
      url="api/module"
      method="post"
      initFetch
      params={[
        { param: "section", value: "internet" },
        { param: "module", value: "email" },
      ]}
    />
  )
}
