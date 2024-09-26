import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

export default function WrongObjectExport() {
  const code = `
[
    { id: 1, name: "Amaya", age: 21 },
    { id: 2, name: "Jose", age: 23 },
    { 
        id: 3, 
        name: 5, // This throws an exception because 5 is not a string 
        age: 43 
    } 
]
`

  return <Code code={code} title="Wrong data types for object fields" language="typescript" />
}
