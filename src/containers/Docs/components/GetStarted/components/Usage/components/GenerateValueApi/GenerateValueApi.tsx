import { TryRoute } from "@containers/Docs/shared/components"

export default function GenerateValueApi() {
  const url = "api/module/id/uuid"

  return (
    <TryRoute
      result="json"
      url={url}
      method="post"
      params={[]}
      body="{}"
      initFetch
      disableBody={true}
    />
  )
}
