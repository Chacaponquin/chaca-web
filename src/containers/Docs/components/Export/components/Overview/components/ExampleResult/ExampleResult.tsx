import { CodesCard } from "@markdown/components/Markdown/components"
import { CodeSection } from "@markdown/components/Markdown/components/CodesCard/domain"

const json = `
[
    { "id": 1, "name": "Alberto", "age": 20 },
    { "id": 2, "name": "Carolina", "age": 28 }
]
`

const yaml = `
- id: 1
  name: Alberto
  age: 20
- id: 2
  name: Carolina
  age: 28
`

const ts = `
interface Data {
    id: number;
    name: string;
    age: number
}

const data: Data[] = [
    { id: 1, name: 'Alberto', age: 20 },
    { id: 2, name: 'Carolina', age: 28 }
]
`

const csv = `
id,name,age
1,Alberto,20
2,Carolina,28
`

const postgres = `
CREATE TABLE Data(
    id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL
    age INTEGER NOT NULL
)

INSERT INTO Data VALUES (1, 'Alberto', 20)
INSERT INTO Data VALUES (2, 'Carolina', 28)
`

const python = `
data = [
    { "id": 1, "nombre": "Alberto", "edad": 20 },
    { "id": 2, "nombre": "Carolina", "edad": 28 }
]
`

const js = `
const data = [
    { id: 1, name: 'Alberto', age: 20 },
    { id: 2, name: 'Carolina', age: 28 }
]
`

const sections: CodeSection[] = [
  { language: "json", code: json, title: { en: "user.json", es: "user.json" } },
  { language: "yaml", code: yaml, title: { en: "user.yml", es: "user.yml" } },
  { language: "typescript", code: ts, title: { en: "user.ts", es: "user.ts" } },
  { language: "javascript", code: js, title: { en: "user.js", es: "user.js" } },
  { language: "css", code: csv, title: { en: "user.csv", es: "user.csv" } },
  { language: "sql", code: postgres, title: { en: "user.sql", es: "user.sql" } },
  { language: "python", code: python, title: { en: "user.py", es: "user.py" } },
]

export default function ExampleResult() {
  return <CodesCard sections={sections} />
}
