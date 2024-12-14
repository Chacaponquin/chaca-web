import { DATASET, DATASET_STORE, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, MiniCode, P } from "@markdown/components/Markdown/components"
import {
  Definition,
  FieldDependency,
  NewMovieSchema,
  Props,
  MovieSchemaDefinition,
} from "../components"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"

export default function Es() {
  return (
    <>
      <P>
        Este tipo de campos constituyen una función que se ejecutará para generar el valor del campo
        en cada documento. Esta función recibe como parámetro un objeto con la información generada
        en el documento hasta ese momento y una{" "}
        <Link to={DATASET_STORE.redirect}>dataset store</Link> con el estado actual del{" "}
        <Link to={DATASET.redirect}>dataset</Link> en el que se encuentra.
      </P>

      <Definition />

      <Props />

      <P>
        El caso de uso más simple para este tipo de campos es utilizando los valores generados por
        los <Link to={OVERVIEW.redirect}>modules</Link> que brinda Chaca. Por ejemplo para definir
        un <Link to={SCHEMA.redirect}>schema</Link> <MiniCode>Movie</MiniCode> que contenga
        información básica acerca de una película se puede hacer utilizando estos{" "}
        <Link to={OVERVIEW.redirect}>modules</Link>.
      </P>

      <MovieSchemaDefinition />

      <P>
        Con este ejemplo solo se utilizan datos de los <Link to={OVERVIEW.redirect}>modules</Link>{" "}
        brindados por Chaca, pero si se quisiera añadir un campo <MiniCode>forChildren</MiniCode>{" "}
        que indicara si la película es apta para niños dependiendo de la categoría se podría hacer
        de la siguiente forma.
      </P>

      <NewMovieSchema />

      <FieldDependency />
    </>
  )
}
