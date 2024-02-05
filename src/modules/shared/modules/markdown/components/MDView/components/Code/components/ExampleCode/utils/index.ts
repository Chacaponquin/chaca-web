import { Language } from "prism-react-renderer"

export function validateCodeLanguage(lan: string | undefined): Language {
  if (lan === "javascript" || lan === "js") {
    return "javascript"
  }
  if (lan === "typescript" || lan === "ts") {
    return "typescript"
  }
  if (lan === "bash") {
    return "bash"
  } else if (lan === "json") {
    return "json"
  } else {
    return "javascript"
  }
}
