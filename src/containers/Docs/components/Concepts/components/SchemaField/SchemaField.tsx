import {
  Danger,
  H2,
  H3,
  Info,
  Link,
  List,
  ListItem,
  MiniCode,
  P,
  Strong,
  Tip,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  ArrayFieldExample,
  ArrayFunctionDefinition,
  ArrayFunctionExample,
  ArrayFunctionParams,
  ArrayLimitExample,
  ArrayLimitParams,
  Definition,
  FloatNullExample,
  FunctionNullExample,
  IntegerNullExample,
  NullFunctionDefinition,
  NullFunctionParams,
  ObjectParams,
} from "./components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import {
  ARRAY_FIELDS,
  ARRAY_LIMIT_FUNCTION,
  ARRAY_LIMITS,
  NULL_FIELDS,
  NULL_FUNCTION,
  NULL_PROBABILITY,
  PARAMS,
  SPECIFIC_NULL_NUMBER,
} from "@modules/docs/domain/core/sections/concepts/schema-field"
import { KEY } from "@modules/docs/domain/core/sections/field-types"

export default function SchemaField() {
  return (
    <>
      <P>
        Un campo dentro de un <Link to={SCHEMA.redirect}>schema</Link> puede ser definido de dos
        formas: una de forma simple y otra para modificar el valor a generar.
      </P>

      <Definition />

      <Tip title="Tipos de campo configurables">
        <P>
          No todos los tipos de campo pueden ser configurables. Revisa la documentación de los{" "}
          <Link to={KEY.redirect}>tipos de campos</Link> disponibles para saber cuales puedes
          configurar
        </P>
      </Tip>

      <H2 title={PARAMS} />

      <P>
        Todos los campos de un <Link to={SCHEMA.redirect}>schema</Link> pueden ser configurados para
        que el valor resultante en cada documento sea <MiniCode>null</MiniCode> o un arreglo de
        valores. Esto se puede hacer definiendo un objeto con los siguientes campos.
      </P>

      <ObjectParams />

      <H2 title={ARRAY_FIELDS} />

      <P>
        Los campos de un <Link to={SCHEMA.redirect}>schema</Link> pueden ser modificados para que
        devuelvan valores en forma de arreglo del <Link to={KEY.redirect}>tipo de campo</Link>{" "}
        definido.
      </P>

      <ArrayFieldExample />

      <H3 title={ARRAY_LIMITS} />

      <P>
        Obviamente en los contextos reales los campos con valores en forma de arreglos varían en
        longitud dentro de cada documento. Esto se puede configurar definiendo{" "}
        <MiniCode>min</MiniCode> y <MiniCode>max</MiniCode>. Para cada documento se generará una
        longitud del arreglo que se encuentre entre los límites definidos.
      </P>

      <ArrayLimitParams />

      <ArrayLimitExample />

      <Danger title="Límites correctos">
        <P>
          Debes asegurarte de que el valor de <MiniCode>max</MiniCode> sea mayor al valor de{" "}
          <MiniCode>min</MiniCode>. Si no se lanzará una excepción.
        </P>
      </Danger>

      <H3 title={ARRAY_LIMIT_FUNCTION} />

      <P>
        En caso de que la longitud del arreglo dependa del valor de los campos del documento
        generado hasta ese momento esta se puede configurar a través de una función que recibe el
        estado actual del documento y el estado actual del{" "}
        <Link to={DATASET.redirect}>Dataset</Link>.
      </P>

      <ArrayFunctionDefinition />

      <ArrayFunctionParams />

      <ArrayFunctionExample />

      <P>
        En este ejemplo dependiendo de la edad del usuario la cantidad de posts escritos varía. Si
        la edad es mayor a 40 se seleccionarán de 10 a 20 posts y en caso contrario el arreglo
        tendrá como máximo 5 valores.
      </P>

      <H2 title={NULL_FIELDS} />

      <P>
        Para los campos que pueden tener valor <MiniCode>null</MiniCode> en los documentos a generar
        se puede configurar a través de la propiedad <MiniCode>possibleNull</MiniCode>.
      </P>

      <P>El valor para esta configuración puede ser una de las siguientes 3 opciones:</P>

      <List>
        <ListItem>
          <P>
            Un número entero que indique la cantidad de documentos en los cuales el campo tendrá
            valor <MiniCode>null</MiniCode>.
          </P>
        </ListItem>
        <ListItem>
          <P>
            Un número flotante entre 0 y 1 que indique la probabilidad de que en el documento el
            campo tenga valor <MiniCode>null</MiniCode>.
          </P>
        </ListItem>
        <ListItem>
          <P>Una función que devuelve una de las opciones anteriores.</P>
        </ListItem>
      </List>

      <H3 title={SPECIFIC_NULL_NUMBER} />

      <P>
        Si se define un número entero como <MiniCode>possibleNull</MiniCode> se elegirán esa
        cantidad de documentos y se asignará <MiniCode>null</MiniCode> al campo definido.
      </P>

      <IntegerNullExample />

      <P>
        En este ejemplo al definir <MiniCode>possibleNull</MiniCode> con <MiniCode>2</MiniCode> se
        escogen 2 documentos de forma aleatoria y se asigna <MiniCode>null</MiniCode> al valor del
        campo <MiniCode>username</MiniCode>.
      </P>

      <H3 title={NULL_PROBABILITY} />

      <P>
        Para casos donde no se necesite un número específico de campos con valor{" "}
        <MiniCode>null</MiniCode> se puede definir un valor flotante de probabilidad que se
        encuentre entre 0 y 1.{" "}
        <Strong>
          Siendo 1 la probabilidad más alta de que el valor sea <MiniCode>null</MiniCode> y 0 la más
          baja
        </Strong>
        .
      </P>

      <P>
        En la generación de cada documento se genera un número aleatorio entre 0 y 1, si este se
        encuentra en el rango definido el valor será <MiniCode>null</MiniCode>, sino se generará el
        valor del <Link to={KEY.redirect}>tipo de campo</Link> definido.
      </P>

      <Info>
        <P>
          Si defines un valor de probabilidad mayor a <MiniCode>1</MiniCode> se asumirá como{" "}
          <MiniCode>1</MiniCode>.
        </P>
      </Info>

      <FloatNullExample />

      <P>
        En este ejemplo al definir <MiniCode>possibleNull</MiniCode> con valor{" "}
        <MiniCode>0.7</MiniCode> existe mayor probabilidad de que el campo{" "}
        <MiniCode>username</MiniCode> sea nulo en los documentos, por lo que en la mayoría de
        ocasiones se debe cumplir esta situación.
      </P>

      <Tip title="Posibilidades absolutas">
        <P>
          En caso de definir una probabilidad de <MiniCode>0</MiniCode> el valor generado nunca será{" "}
          <MiniCode>null</MiniCode>. Mientras que si es <MiniCode>1</MiniCode> siempre se generará{" "}
          <MiniCode>null</MiniCode>.
        </P>
      </Tip>

      <Info>
        <P>
          Al ser valores probabilísticos la cantidad de documentos que contengan el campo con valor{" "}
          <MiniCode>null</MiniCode> varía en cada generación que se ejecute.
        </P>
      </Info>

      <H3 title={NULL_FUNCTION} />

      <P>
        Si la probabilidad de que el campo tenga valor <MiniCode>null</MiniCode> en cada documento
        depende de los campos generatos hasta en ese momento en el documento o del estado actual del{" "}
        <Link to={DATASET.redirect}>Dataset</Link> se puede definir{" "}
        <MiniCode>possibleNull</MiniCode> como una función que retorne un valor de probabilidad
        entre <MiniCode>0</MiniCode> y <MiniCode>1</MiniCode>.
      </P>

      <NullFunctionDefinition />

      <NullFunctionParams />

      <FunctionNullExample />
    </>
  )
}
