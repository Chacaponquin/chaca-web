import { Code } from "@modules/shared/modules/markdown/components/Markdown/components"

const code = `
.
├── data/
├── scripts/
│   └── build-users.js
├── package.json
└── ...
`

export default function FolderStructure() {
  return <Code code={code} language="bash" title="Folder structure" />
}
