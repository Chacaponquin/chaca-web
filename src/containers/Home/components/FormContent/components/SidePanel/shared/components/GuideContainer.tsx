import Markdown from "markdown-to-jsx";
import Highlight, { defaultProps } from "prism-react-renderer";

import theme from "prism-react-renderer/themes/duotoneDark";
import LoaderContainer from "../../../../../../../../shared/components/Loader/LoaderContainer";

const ListItem = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex items-start">
      <div className="pr-2">
        <div className="translate-y-[10px] w-[8px] h-[8px] rounded-full bg-black"></div>
      </div>

      <div>{children}</div>
    </div>
  );
};

const ExampleCode = ({ children }: { children: string }) => {
  return (
    <div className="code-container bg-darkColor px-3 py-2 rounded-sm text-base">
      <Highlight {...defaultProps} language="jsx" code={children} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          return tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i, className: "buenas" })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ));
        }}
      </Highlight>
    </div>
  );
};

const GuideContainer = ({
  content,
  loading,
}: {
  content: string;
  loading: boolean;
}) => {
  return (
    <LoaderContainer loading={loading} className="w-[60px] esm:w-[40px]">
      <div className="flex w-full text-lg">
        <Markdown
          className="w-full flex flex-col"
          options={{
            overrides: {
              img: { props: { className: "mb-3" } },
              ul: { props: { className: "list-disc flex flex-col gap-2" } },
              li: {
                component: ListItem,
              },
              h3: { props: { className: "text-xl font-fontBold mt-3" } },
              h2: { props: { className: "text-2xl font-fontBold" } },
              code: {
                component: ExampleCode,
                props: {
                  className:
                    "bg-slate-100 border-2 rounded-sm px-1 mt-3 py-2 font-fontCodeRegular",
                },
              },
              pre: {
                props: { className: "mt-2 mb-4" },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </LoaderContainer>
  );
};

export default GuideContainer;
