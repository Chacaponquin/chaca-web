import { Code } from "@markdown/components/Markdown/components"

export default function Example() {
  const code = `
const ticketSchema = chaca.schema({
    status: chaca.enum(["Open", "In progress", "Pending", "On hold", "Resolved", "Closed"])
})

ticketSchema.array(3)

// result
[
    { status: "Open" },
    { status: "Resolved" },
    { status: "Pending" }
]
`

  return (
    <Code
      code={code}
      language="typescript"
      title={{ en: "Enum ticket status example", es: "Estado de un ticket con un campo enum" }}
    />
  )
}
