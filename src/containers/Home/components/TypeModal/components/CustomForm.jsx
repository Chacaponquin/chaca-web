import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import LoaderContainer from "../../../../../shared/components/Loader/LoaderContainer";

const CustomForm = ({ handleChangeDataType, dataType }) => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleChangeCode = (code) => {
    handleChangeDataType({ ...dataType, code });
  };

  return (
    <div className="w-full flex gap-5">
      <div className="w-[60%]">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={dataType.code}
          options={{
            minimap: { enabled: false },
            fontSize: "16px",
          }}
          onMount={handleEditorDidMount}
          className="code-container "
          theme="vs"
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

      <div className="flex flex-col w-[40%]"></div>
    </div>
  );
};

export default CustomForm;
