import { TryRoute } from "@containers/Docs/components/Api/shared/components"

export default function Try() {
  const body = `{
    "id": {
        "type": "module",
        "module": "id.uuid"
    },
    "authors": {
        "type": "module",
        "module": "person.full_name",
        "isArray": {
            "min": 1,
            "max": 2
        }
    },
    "image": {
        "type": "module",
        "module": "image.film"
    },
    "likes": {
        "type": "module",
        "module": "datatype.int",
        "params": {
            "min": 0,
            "max": 50000
        }
    },
    "category": {
        "type": "enum",
        "values": ["Horror", "War", "History", "Comedy"]
    }
}`

  return <TryRoute body={body} method="post" params={[]} url="api/schema" />
}
