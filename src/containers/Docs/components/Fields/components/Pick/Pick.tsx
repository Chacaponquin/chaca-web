import { DATASET, SCHEMA, SCHEMA_FIELD } from "@modules/docs/domain/core/sections/concepts"
import { H2, Link, MiniCode, P } from "@markdown/components/Markdown/components"
import {
  Definition,
  EnumExample,
  EnumResult,
  Example,
  FunctionDefinition,
  FunctionProps,
  LimitExample,
  LimitParams,
  PickParams,
} from "./components"
import { ENUM } from "@modules/docs/domain/core/sections/field-types"
import {
  CUSTOM_COUNT,
  ELEMENTS_RANGE,
  PICK_SPECIFIC_COUNT,
} from "@modules/docs/domain/core/sections/field-types/pick"

export default function Pick() {
  return (
    <>
      <P>
        Uno de los principales problemas del <Link to={ENUM.redirect}>campo enum</Link> es que en
        caso de convertirlo en un <Link to={SCHEMA_FIELD.arrayFieldsUrl}>arreglo de valores</Link>{" "}
        pueden generarse valores repetidos dentro del arreglo.
      </P>

      <P>
        Por ejemplo: En el caso de que para un producto de un Ecommerce se quieran almacenar las
        tallas disponibles se puede utilizar un <Link to={ENUM.redirect}>campo enum</Link> de la
        siguiente forma.
      </P>

      <EnumExample />

      <P>
        Al generar un objeto del <Link to={SCHEMA.redirect}>schema</Link> definido se puede tener un
        resultado similar al siguiente.
      </P>

      <EnumResult />

      <P>
        Como se puede observar, en el documento generado la talla <MiniCode>L</MiniCode> se repite
        dentro del arreglo, hecho que no debería ocurrir. Para esta problemática existe el campo{" "}
        <MiniCode>pick</MiniCode>.
      </P>

      <P>
        Este campo devuelve para cada documento un arreglo con una cantidad de valores
        pertenecientes a los definidos como valores posibles, lo que en este caso en el arreglo no
        existirán valores repetidos.
      </P>

      <Definition />

      <PickParams />

      <P>
        Utilizando el ejemplo presentado anteriormente la definición de las tallas para un producto
        pueden ser definidas de la siguiente forma utilizando el método <MiniCode>pick</MiniCode>.
      </P>

      <Example />

      <H2 title={PICK_SPECIFIC_COUNT} />

      <P>
        La cantidad de elementos a escoger al ser definida como un número indica que para cada
        generación serán creado un arreglo con esa cantidad de valores.
      </P>

      <Example />

      <H2 title={ELEMENTS_RANGE} />

      <P>
        Similar a la configuración para devolver un valor en forma de{" "}
        <Link to={SCHEMA_FIELD.arrayFieldsUrl}>arreglo</Link> se puede definir una cantidad máxima y
        mínima de valores que pueden ser escogidos en cada documento.
      </P>

      <LimitParams />

      <LimitExample />

      <H2 title={CUSTOM_COUNT} />

      <P>
        Si se quiere utilizar el estado actual del <Link to={DATASET.redirect}>dataset</Link> y del
        documento a crear se puede definir la cantidad de elementos a escoger como una función que
        recibe varios estados y debe devolver un número o los límites del arreglo a generar.
      </P>

      <FunctionDefinition />

      <FunctionProps />
    </>
  )
}
