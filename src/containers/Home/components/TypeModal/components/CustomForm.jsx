import Editor from "@monaco-editor/react";
import LoaderContainer from "../../../../../shared/components/Loader/LoaderContainer";
import js from "../../../../../assets/icons/javascript.svg";
import { useContext, useState } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";

const CustomForm = ({ handleChangeDataType, dataType }) => {
  function handleEditorDidMount(editor, monaco) {
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

  const handleChangeCode = (code) => {
    handleChangeDataType({ ...dataType, code });
  };

  return (
    <div className="w-full flex h-full">
      <div className="w-full flex flex-col rounded-lg lg:w-[50%] h-full">
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

const JSDoc = () => {
  const { selectedDataset } = useContext(DatasetsContext);

  const thisExampleCode = () => {
    let returnString = "//EXAMPLE\n";

    const fields = selectedDataset.fields;

    for (let i = 0; i < fields.length; i++) {
      if (fields[i].name && fields[i].dataType)
        returnString +=
          i === fields.length - 1
            ? `this['${fields[i].name}']`
            : `this['${fields[i].name}']\n`;
    }

    return returnString;
  };

  const ventajas = [
    {
      text: "Puedes acceder a los campos que has creado en tu dataset solo utilizando <code>this</code>",
      code: thisExampleCode(),
    },
    {
      text: "Tienes a tu mano una función <code>oneOfArray(array)</code> para obtener 1 elemento de un arreglo pasado como parámetro",
      code: " oneOfArray([1, 'Hola', {hola: 'Buenas'}]) //'Hola'",
    },
  ];

  const indicaciones = [
    "Tu función debe devolver un valor. Evita usar devolver valores <code>undefined</code>",
    'En caso de acceder a un campo con un nombre compuesto puedes hacerlo de esta forma <code>this["Field Name"]</code> para evitar un error en la ejecución',
  ];

  return (
    <div className="w-full flex flex-col items-center ">
      <img
        src={js}
        alt="javascript"
        className="w-[150px] h-[150px] object-contain"
      />

      <div className="flex flex-col text-center">
        <h1>Guide for Javascript</h1>
      </div>

      <div className="w-full">
        <p>
          Hey!!! Quieres crear un valor con tus propias reglas utilizando
          Javascript? Pues este es tu sitio
          <h2 className="my-2">
            Recuerda que puedes utilizar esta funcionalidad con otros lenguajes
          </h2>
        </p>

        <div>
          <h3>¿Qué tienes a mano?</h3>
          <ol>
            {ventajas.map((el, i) => (
              <div className="flex gap-[10px]" key={i}>
                <div>
                  <div className="w-[10px] h-[10px] rounded-full bg-principalColor flex relative top-[10px]"></div>
                </div>

                <div>
                  <div dangerouslySetInnerHTML={{ __html: el.text }}></div>
                  <div>
                    {el.code && <DocCode code={el.code} height="300px" />}
                  </div>
                </div>
              </div>
            ))}
          </ol>
        </div>

        <div>
          <h3>Indicaciones</h3>
          <ol>
            {indicaciones.map((el, i) => (
              <div className="flex gap-[10px]" key={i}>
                <div>
                  <div className="w-[10px] h-[10px] rounded-full bg-principalColor flex relative top-[10px]"></div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: el }}></div>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

const DocCode = ({ code }) => {
  const [height, setHeight] = useState(0);

  return (
    <div className="rounded-lg bg-white border-2 p-4 my-2">
      <Editor
        height={`${height}px`}
        options={{
          domReadOnly: true,
          minimap: { enabled: false },
          fontSize: "15px",
          lineNumbers: "off",
          glyphMargin: false,
          folding: false,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          readOnly: true,
        }}
        onMount={(editor, monaco) => {
          monaco.editor.defineTheme("dark-theme", {
            base: "vs-dark",
            inherit: true,
            rules: [{}],
            colors: {
              "editor.background": "#282c34",
            },
          });

          monaco.editor.setTheme("light-theme");
          setHeight(editor.getModel().getLineCount() * 21);
        }}
        className="code-container"
        language="javascript"
        defaultValue={code}
        loading={<div></div>}
      />
    </div>
  );
};

export default CustomForm;
