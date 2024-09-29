import { TryRoute } from "@containers/Docs/components/Api/shared/components"

export default function Try() {
  return (
    <TryRoute
      body={"{}"}
      url="api/module"
      method="post"
      params={[
        { param: "section", value: "internet" },
        { param: "module", value: "email" },
      ]}
    />
  )
}
