import Editor from "@monaco-editor/react";
import { useState } from "react";
import LoaderContainer from "../Loader/LoaderContainer";

const ExampleCode = ({ code }: { code: string }) => {
  const [height, setHeight] = useState(0);

  return (
    <div className="rounded-lg bg-white border-2 p-4 my-2">
      <Editor
        height={`${height}px`}
        options={{
          domReadOnly: true,
          minimap: { enabled: false },
          fontSize: 15,
          lineNumbers: "off",
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          readOnly: true,
        }}
        onMount={(editor, monaco) => {
          setHeight(editor.getModel()!.getLineCount() * 21);
        }}
        className="code-container"
        language="javascript"
        defaultValue={code}
        loading={
          <LoaderContainer
            className={"w-[80px]"}
            loading={true}
            children={<></>}
          />
        }
      />
    </div>
  );
};

export default ExampleCode;
