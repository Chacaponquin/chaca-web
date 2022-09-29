import Editor from "@monaco-editor/react";
import { useState } from "react";

const ExampleCode = ({ code }: { code: string }) => {
  const [height, setHeight] = useState(0);

  return (
    <div className="rounded-lg flex w-full p-4 my-2">
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
        width={"100%"}
        onMount={(editor, monaco) => {
          setHeight(editor.getModel()!.getLineCount() * 21);
        }}
        className="code-cont"
        language="javascript"
        defaultValue={code}
      />
    </div>
  );
};

export default ExampleCode;
