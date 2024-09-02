import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import { Id } from "@modules/shared/domain/id"
import clsx from "clsx"

interface Props {
  code: string
  language: Language
}

export default function ExampleCode({ code, language }: Props) {
  const CLASS = clsx(
    "px-4 py-3",
    "code-view",
    "bg-code-dark dark:bg-[#282A36]",
    "w-full",
    "overflow-x-auto",
    "rounded",
  )

  return (
    <div className={CLASS}>
      <pre>
        <Highlight {...defaultProps} language={language} code={code} theme={theme}>
          {({ tokens, getLineProps, getTokenProps }) => {
            return tokens.map((line, index) => {
              return (
                <div {...getLineProps({ line, key: index })} key={Id.generate()}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              )
            })
          }}
        </Highlight>
      </pre>
    </div>
  )
}
