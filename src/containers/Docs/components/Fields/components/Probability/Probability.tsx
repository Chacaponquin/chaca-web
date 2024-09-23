import { Content } from "@containers/Docs/shared/components"
import { ENUM } from "@modules/docs/domain/core/sections/field-types"
import {
  H2,
  Info,
  Link,
  MiniCode,
  P,
  Strong,
} from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  FunctionDefinition,
  FunctionExample,
  FunctionProps,
  ProbParams,
  ValueExample,
} from "./components"
import { DATASET } from "@modules/docs/domain/core/sections/concepts"

export default function Probability() {
  return (
    <Content>
      <P>
        Al utilizar un <Link to={ENUM.redirect}>campo enum</Link> todos los valores definidos como
        posibles tienen la misma posibilidad de ser escogidos. Para los casos en los cuales se
        quiera priorizar uno o varios valores sobre el resto el método{" "}
        <MiniCode>probability</MiniCode> resulta una opción ideal.
      </P>

      <Definition />

      <ProbParams />

      <H2>Valor de probabilidad</H2>

      <P>
        Para definir una probabilidad de elección a un valor se debe definir un valor numérico
        flotante que se encuentre entre <MiniCode>0</MiniCode> y <MiniCode>1</MiniCode> en la
        propiedad <MiniCode>chance</MiniCode>.{" "}
        <Strong>
          Mientras más cerca de <MiniCode>1</MiniCode>, más probabilidades existen de que sea
          escogido
        </Strong>
        .
      </P>

      <ValueExample />

      <Info>
        <P>
          En caso de que se defina un valor de probabilidad menor a 0 se asumirá 0 como valor
          asignado. De forma similar si se define un valor superior a 1 se asumirá 1 como valor de
          probabilidad.
        </P>
      </Info>

      <H2>Probabilidad variable</H2>

      <P>
        El valor de probabilidad no necesariamente debe ser un valor numérico, ya que este valor
        puede depender del estado actual del documento o del{" "}
        <Link to={DATASET.redirect}>dataset</Link>
      </P>

      <FunctionDefinition />

      <FunctionProps />

      <P>
        Por ejemplo, para asignar el sexo de un usuario con respecto a las publicaciones que ha
        realizado se puede definir de la siguiente forma.
      </P>

      <FunctionExample />

      <P>
        En este ejemplo se filtran todas las publicaciones buscando cuáles pertenecen al usuario.
        Una vez obtenidas se cuentan cuántas pertenecen a la categoría <MiniCode>Beauty</MiniCode>,
        si esta cantidad supera a <MiniCode>3</MiniCode> la probabilidad de que el sexo sea{" "}
        <MiniCode>female</MiniCode> será <MiniCode>0.8</MiniCode>, sino <MiniCode>0.2</MiniCode>.
      </P>
    </Content>
  )
}
