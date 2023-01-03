import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { useQuery } from "../../../../../../../shared/hooks/useQuery";
import { API_ROUTES } from "../../../../../../../shared/routes/api/API_ROUTES";
import LoaderContainer from "../../../../../../../shared/components/Loader/LoaderContainer";

import theme from "prism-react-renderer/themes/duotoneDark";

import Highlight, { defaultProps } from "prism-react-renderer";

const ExampleCode = ({ children }: { children: string }) => {
  return (
    <div className="!font-fontCodeRegular bg-darkColor px-3 py-2 rounded-sm">
      <Highlight {...defaultProps} language="jsx" code={children} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          return tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
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

const CustomFormDocs = () => {
  const [content, setContent] = useState("");

  const { loading } = useQuery<string>({
    url: API_ROUTES.DOCS.GET_CUSTOM_FORM_GUIDES,
    onCompleted: (data) => {
      setContent(data);
    },
    onError: (err) => {},
  });

  return (
    <LoaderContainer loading={loading} className="w-[60px] esm:w-[40px]">
      <div className="flex w-full text-lg">
        <Markdown
          options={{
            overrides: {
              img: { props: { className: "mb-3" } },
              ul: { props: { className: "list-disc flex flex-col gap-2" } },
              li: { props: { className: "list-item" } },
              h3: { props: { className: "text-xl font-fontBold mt-3" } },
              h2: { props: { className: "text-2xl font-fontBold" } },
              code: {
                component: ExampleCode,
                props: {
                  className:
                    "bg-slate-100 border-2 rounded-sm p-1 font-fontCodeRegular",
                },
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

export default CustomFormDocs;
