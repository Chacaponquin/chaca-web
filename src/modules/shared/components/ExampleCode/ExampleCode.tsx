import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps } from "prism-react-renderer"
import { v4 as uuid } from "uuid"
import { validateCodeLanguage } from "./utils/validateCodeLanguage"

export default function ExampleCode({ code, language }: { code: string; language: string }) {
  return (
    <div className='code-container bg-darkColor px-3 py-2 rounded-sm text-base overflow-x-auto no-scroll'>
      <Highlight
        {...defaultProps}
        language={validateCodeLanguage(language)}
        code={code}
        theme={theme}
      >
        {({ tokens, getLineProps, getTokenProps }) => {
          return tokens.map((line, i) => {
            return (
              <div {...getLineProps({ line, key: i, className: "" })} key={uuid()}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            )
          })
        }}
      </Highlight>
    </div>
  )
}
