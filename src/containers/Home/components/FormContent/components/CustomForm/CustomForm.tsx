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
    <div className="w-full flex px-5">
      <div className="w-full py-3 rounded border-2">
        <Editor
          height={`550px`}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            glyphMargin: false,
            folding: false,
          }}
          width={"100%"}
          onChange={handleChange}
          className="code-cont w-full"
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
    </div>
  );
};

export default CustomForm;
