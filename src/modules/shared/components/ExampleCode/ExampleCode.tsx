import theme from "prism-react-renderer/themes/duotoneDark"
import Highlight, { defaultProps } from "prism-react-renderer"
import { v4 as uuid } from "uuid"
import { Fragment } from "react"

export default function ExampleCode({ code }: { code: string }) {
  return (
    <div className='code-container bg-darkColor px-3 py-2 rounded-sm text-base'>
      <Highlight {...defaultProps} language='jsx' code={code} theme={theme}>
        {({ tokens, getLineProps, getTokenProps }) => {
          return tokens.map((line, i) => {
            if (i !== tokens.length - 1) {
              return (
                <div {...getLineProps({ line, key: i, className: "buenas" })} key={uuid()}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              )
            } else {
              return <Fragment key={i}></Fragment>
            }
          })
        }}
      </Highlight>
    </div>
  )
}
