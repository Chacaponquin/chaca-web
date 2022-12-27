import { useContext, useState } from "react";
import Markdown from "markdown-to-jsx";
import { useQuery } from "../../../../../../../shared/hooks/useQuery";
import { API_ROUTES } from "../../../../../../../shared/routes/api/API_ROUTES";
import LoaderContainer from "../../../../../../../shared/components/Loader/LoaderContainer";

const CustomFormDocs = () => {
  const [content, setContent] = useState("");

  const { loading } = useQuery<string>({
    url: API_ROUTES.DOCS.GET_CUSTOM_FORM_GUIDES,
    onCompleted: (data) => {
      console.log(data);
      setContent(data);
    },
    onError: (err) => {},
  });

  return (
    <LoaderContainer loading={loading} className="w-[60px] esm:w-[40px] ">
      <div className="flex w-full text-base">
        <Markdown
          options={{
            overrides: {
              h2: { props: { className: "text-xl font-fontBold" } },
              code: {
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
