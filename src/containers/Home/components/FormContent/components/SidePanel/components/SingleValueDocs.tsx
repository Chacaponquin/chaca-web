import { useState } from "react";
import Editor from "@monaco-editor/react";
import LoaderContainer from "../../../../../../../shared/components/Loader/LoaderContainer";
import {
  Schema,
  SubOption,
} from "../../../../../../../shared/interfaces/options.interface";
import { ChacaSimpleButton } from "../../../../../../../shared/components/ChacaButton/ChacaButton";

const SingleValueDocs = ({
  option,
  parent,
}: {
  option: SubOption;
  parent: Schema;
}) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-sm bg-secondColor px-4 py-1 text-white font-fontBold text-lg w-max">
        {option.name}
      </div>

      <p className="py-3 text-base text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        iusto minima mollitia voluptatum voluptatibus quisquam?
      </p>

      <h1 className="mb-0 font-fontExtraBold text-lg">Test Endpoint</h1>
      <TestEndpointPlayGround option={option} />
    </div>
  );
};

const TestEndpointPlayGround = ({ option }: { option: SubOption }) => {
  const initialCode = `axios.get("${option.route}", {\n\theaders: {\n\t\tparams: {}\n\t}\n})`;

  const [code, setCode] = useState(initialCode);

  const handleChange = (c: string | undefined) => {
    setCode(c || code);
  };

  const handleSubmit = () => {};

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

  return (
    <div className="flex w-full flex-col border-2 rounded">
      <Editor
        height={`150px`}
        options={{
          minimap: { enabled: false },
          fontSize: 13,
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          lineNumbers: "off",
        }}
        width={"100%"}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        className="code-cont p-2"
        language="javascript"
        defaultValue={code}
        loading={
          <LoaderContainer
            className={"w-[60px] esm:w-[40px]"}
            loading={true}
            children={<></>}
          />
        }
      />

      <div className="flex justify-end w-full py-1 px-2 border-t-2">
        <ChacaSimpleButton
          color="primary"
          size="small"
          text="Test"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SingleValueDocs;
