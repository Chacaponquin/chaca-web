import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import { Id } from "@modules/shared/domain/id"
import clsx from "clsx"

interface Props {
  code: string
  language: Language
  className?: string
}

export default function ExampleCode({ code, language, className }: Props) {
  const CLASS = clsx(
    "px-4 py-4",
    "code-view",
    "bg-scale-3",
    "w-full",
    "overflow-x-auto",
    "text-sm",
    "rounded",
    className,
  )

  return (
    <div className={CLASS}>
      <pre>
        <Highlight {...defaultProps} language={language} code={code} theme={theme}>
          {({ tokens, getLineProps, getTokenProps }) => {
            return tokens.map((line, index) => {
              if (language === "typescript" || language === "javascript" || language === "json") {
                if (index !== 0 && index !== tokens.length - 1) {
                  return (
                    <div {...getLineProps({ line, key: index })} key={Id.generate()}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} key={key} />
                      ))}
                    </div>
                  )
                } else {
                  return <></>
                }
              } else {
                return (
                  <div {...getLineProps({ line, key: index })} key={Id.generate()}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </div>
                )
              }
            })
          }}
        </Highlight>
      </pre>
    </div>
  )
}
