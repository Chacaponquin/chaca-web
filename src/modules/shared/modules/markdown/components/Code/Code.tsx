import ExampleCode from "../ExampleCode/ExampleCode"

export default function Code({ children, className }: { children: string; className: string }) {
  const languageClass = className.split(" ").find((c) => c.startsWith("lang-")) as string
  const language = languageClass.replace("lang-", "")

  return <ExampleCode code={children} language={language} />
}
