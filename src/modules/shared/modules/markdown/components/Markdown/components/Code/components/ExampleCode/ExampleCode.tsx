import theme from "prism-react-renderer/themes/vsDark"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import { Id } from "@modules/shared/domain/id"
import clsx from "clsx"

interface Props {
  code: string
  language: Language
  className?: string
  rounded?: boolean
}

export default function ExampleCode({ code, language, className, rounded = true }: Props) {
  const CLASS = clsx(
    "px-4 py-4",
    "code-view",
    "bg-scale-3",
    "w-full",
    "overflow-auto",
    "max-h-[300px]",
    "text-sm",
    rounded ? "rounded" : "rounded-b",
    className,
  )

  return (
    <div className={CLASS}>
      <pre>
        <Highlight {...defaultProps} language={language} code={code.trim()} theme={theme}>
          {({ tokens, getLineProps, getTokenProps }) => {
            return tokens.map((line, index) => {
              return (
                <div {...getLineProps({ line, key: index })} key={Id.generate()}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={Id.generate()} />
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
