import { ApiUrlBuilder } from "./api-url-builder"

interface Props {
  url: string
  body: Record<string, unknown>
}

export class FetchCodeBuilder {
  static curl({ url, body }: Props): string {
    return `
curl -X POST "${ApiUrlBuilder.build(url)}" -H "Content-Type: application/json" -d '${JSON.stringify(
      body,
    )}'
`
  }

  static axios({ url, body }: Props): string {
    return `
axios.post(
    "${ApiUrlBuilder.build(url)}", 
    ${JSON.stringify(body)}
)
    .then(response => response.data)
    .error(error => console.log(error))
`
  }
}
