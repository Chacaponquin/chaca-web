import { useState } from "react";
import Editor from "@monaco-editor/react";
import {
  CustomDataType,
  DatasetField,
} from "../../../../../../shared/interfaces/datasets.interface";
import LoaderContainer from "../../../../../../shared/components/Loader/LoaderContainer";

const CustomForm = ({ field }: { field: DatasetField<CustomDataType> }) => {
  const initialCode =
    "function getValue(fields){\n\t// logic of your function\n}";

  const [code, setCode] = useState(initialCode);

  const handleChange = (c: string | undefined) => {
    setCode(c || code);
  };

  return (
    <div className="w-full flex">
      <Editor
        height={`600px`}
        options={{
          minimap: { enabled: false },
          fontSize: 15,
          glyphMargin: false,
          folding: false,
        }}
        width={"100%"}
        onChange={handleChange}
        className="code-cont p-2 w-full"
        language="javascript"
        defaultValue={code}
        loading={
          <LoaderContainer
            className={"w-[100px] esm:w-[60px]"}
            loading={true}
            children={<></>}
          />
        }
      />
    </div>
  );
};

export default CustomForm;
