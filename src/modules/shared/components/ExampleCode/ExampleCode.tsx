import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps } from "prism-react-renderer"
import { v4 as uuid } from "uuid"

export default function ExampleCode({ code }: { code: string }) {
  return (
    <div className='code-container bg-darkColor px-3 py-2 rounded-sm text-base'>
      <Highlight {...defaultProps} language='jsx' code={code} theme={theme}>
        {({ tokens, getLineProps, getTokenProps }) => {
          return tokens.map((line, i) => {
            return (
              <div {...getLineProps({ line, key: i, className: "buenas" })} key={uuid()}>
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
