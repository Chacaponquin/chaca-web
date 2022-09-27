import { useContext } from "react";
import ExampleCode from "../../../../../../shared/components/ExampleCode/ExampleCode";
import { DatasetsContext } from "../../../../../../shared/context/DatasetsContext";

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
        src={"/images/code/javascript.svg"}
        alt="javascript"
        className="w-[150px] h-[150px] object-contain"
      />

      <div className="flex flex-col text-center">
        <h1>Guia de Javascript</h1>
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
                  <div>{el.code && <ExampleCode code={el.code} />}</div>
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

export default JSDoc;
