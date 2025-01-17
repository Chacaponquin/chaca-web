import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

const ts = `
const movieSchema = chaca.schema({
    id: () => modules.id.uuid(),
    authors: {
        type: () => modules.person.fullName({ language: "es" }),
        isArray: { min: 1, max: 3 },
    },
    image: () => modules.image.film(),
    likes: () => modules.datatype.int({ min: 0, max: 50000 }),
    category: chaca.enum(["Horror", "War", "History", "Comedy"])
})
`

const json = `
{
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
}  
`

const sections: CodeSection[] = [
  { code: ts, language: "typescript", title: { en: "Movie.js", es: "Movie.js" } },
  { code: json, language: "json", title: { en: "Request body", es: "Cuerpo de la petición" } },
]

export default function Body() {
  return <CodesCard sections={sections} />
}
