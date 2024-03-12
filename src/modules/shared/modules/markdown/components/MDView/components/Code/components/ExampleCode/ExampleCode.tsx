import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps } from "prism-react-renderer"
import { v4 as uuid } from "uuid"
import { validateCodeLanguage } from "./utils"

interface Props {
  code: string
  language?: string
}

export default function ExampleCode({ code, language }: Props) {
  return (
    <div className="bg-code-dark dark:bg-[#282A36] px-4 py-3 overflow-x-auto w-full flex [&>*]:text-base code-view">
      <pre>
        <Highlight
          {...defaultProps}
          language={validateCodeLanguage(language)}
          code={code}
          theme={theme}
        >
          {({ tokens, getLineProps, getTokenProps }) => {
            return tokens.map((line, index) => {
              return (
                <div {...getLineProps({ line, key: index })} key={uuid()}>
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
