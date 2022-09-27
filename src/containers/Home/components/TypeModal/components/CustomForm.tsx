import Editor from "@monaco-editor/react";
import LoaderContainer from "../../../../../shared/components/Loader/LoaderContainer";
import { FieldDataType } from "../../../../../shared/interfaces/datasets.interface";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import JSDoc from "./Guides/JSDoc";

const CustomForm = ({
  handleChangeDataType,
  dataType,
}: {
  handleChangeDataType: (obj: FieldDataType) => void;
  dataType: FieldDataType;
}) => {
  function handleEditorDidMount(editor: any, monaco: any) {
    monaco.editor.defineTheme("light-theme", {
      base: "vs",
      inherit: true,
      rules: [{}],
      colors: {
        "editor.background": "#ffffff",
      },
    });

    monaco.editor.setTheme("light-theme");
  }

  const handleChangeCode = (code: string | undefined) => {
    if (dataType.type === DATA_TYPES.CUSTOM)
      handleChangeDataType({ ...dataType, code: code || "" });
  };

  return (
    <div className="w-full flex h-full">
      <div className="w-full flex flex-col rounded-lg lg:w-[50%] h-full">
        <Editor
          height="100%"
          defaultLanguage="python"
          defaultValue={
            dataType.type === DATA_TYPES.CUSTOM ? dataType.code : ""
          }
          options={{
            minimap: { enabled: false },
            fontSize: 16,
          }}
          onMount={handleEditorDidMount}
          className="code-container"
          onChange={handleChangeCode}
          loading={
            <LoaderContainer
              className={"w-[150px] esm:w-[70px]"}
              loading={true}
              children={<></>}
            />
          }
        />
      </div>

      <div className="hidden flex-col w-[50%] bg-slate-50 rounded-xl h-full overflow-y-auto lg:flex">
        <div className="custom-code-doc text-lg px-10 py-3">
          <JSDoc />
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
