import React from "react";

const AboutQuerys = () => {
  const cellTableClass = "font-fontCodeRegular px-4 py-2 text-base esm:text-sm";
  const tableHeaderClass =
    "text-left font-fontCodeBold px-4 py-2 text-base esm:text-sm";

  return (
    <div className="doc-content">
      <h1>Acerca de las Peticiones</h1>
      <div>
        <p>
          Las peticiones deben realizarse con el método <code>GET</code> a la
          url de la cual se desea obtener el dato. Todas las rutas comparten la
          misma base: <code>{process.env.REACT_APP_API_URL}</code>
        </p>
        <p>
          La sintaxis de la ruta para los campos esta compuesta por el
          <h2>ParentData</h2> como primer parámetro de la query refiriendose al
          contenedor principal <h3>Ejemplo: ID, DataType, Lorem</h3> y el campo
          específico que se desea generar que pertenezca al <h2>ParentData</h2>{" "}
          especificado en el primer parámetro{" "}
          <h3>Ejemplo: FileName, Gender, SongName</h3>
        </p>
        <p>
          Las rutas a las que puedes acceder para cada campo serán descritas en
          la sección de <h2>Fields</h2>
        </p>
        <p>
          Las rutas reciben como parámtros argumentos especificados en cada una
          en las secciones siguientes. Pero estas querys reciben parametros los
          cuales son: <code>isArray, limit</code>
        </p>

        <div className="rounded-md border-2">
          <table className="table-auto w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className={tableHeaderClass}>Argument</th>
                <th className={tableHeaderClass}>Type</th>
                <th className={tableHeaderClass + " lg:block hidden"}>
                  Description
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={cellTableClass}>isArray</td>
                <td className={cellTableClass}>Boolean</td>
                <td
                  className={
                    cellTableClass + " text-sm esm:text-xs lg:block hidden"
                  }
                >
                  Indica si el valor a regresar debe ser un arreglo que contiene
                  valores aleatorios del tipo seleccionado
                </td>
              </tr>
              <tr>
                <td className={cellTableClass}>limit</td>
                <td className={cellTableClass}>Number</td>
                <td className={cellTableClass + " text-sm lg:block hidden"}>
                  Indica el límite que no puede ser superado por el arreglo. Por
                  defecto el arreglo no superará los 10 valores
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutQuerys;
