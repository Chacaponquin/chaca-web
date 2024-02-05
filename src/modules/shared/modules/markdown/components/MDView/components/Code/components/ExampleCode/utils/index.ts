import { Language } from "prism-react-renderer"

export function validateCodeLanguage(lan: string | undefined): Language {
  if (lan === "javascript" || lan === "js") {
    return "javascript"
  }

  if (lan === "typescript" || lan === "ts") {
    return "typescript"
  }

  if (lan === "bash" || lan === "shell") {
    return "bash"
  }

  if (lan === "json") {
    return "json"
  }

  if (lan === "sql") {
    return "sql"
  }

  if (lan === "yaml") {
    return "yaml"
  }

  if (lan === "python") {
    return "python"
  }

  return "javascript"
}
