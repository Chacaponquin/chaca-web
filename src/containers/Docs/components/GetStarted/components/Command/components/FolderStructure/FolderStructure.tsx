import { Code } from "@markdown/components/Markdown/components"

const code = `
.
├── data/
├── scripts/
│   └── build-users.js
├── package.json
└── ...
`

export default function FolderStructure() {
  return (
    <Code
      code={code}
      language="bash"
      title={{ en: "Folder structure", es: "Estructura de carpetas" }}
    />
  )
}
