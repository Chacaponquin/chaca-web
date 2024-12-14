import { DATASET, DATASET_STORE, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, MiniCode, P } from "@modules/shared/modules/markdown/components/Markdown/components"
import {
  Definition,
  FieldDependency,
  NewMovieSchema,
  Props,
  MovieSchemaDefinition,
} from "../components"
import { OVERVIEW } from "@modules/docs/domain/core/sections/modules"

export default function En() {
  return (
    <>
      <P>
        This field type is a function that will be executed to generate the field value on each
        document. This function receives as a parameter an object with the information generated in
        the document up to that moment and a <Link to={DATASET_STORE.redirect}>dataset store</Link>{" "}
        with the current state of the <Link to={DATASET.redirect}>dataset</Link> in which it is
        located.
      </P>

      <Definition />

      <Props />

      <P>
        The simplest use case for this field type is using the values generated by the{" "}
        <Link to={OVERVIEW.redirect}>modules</Link> provided by Chaca. For example, to define a{" "}
        <MiniCode>Movie</MiniCode> <Link to={SCHEMA.redirect}>schema</Link> that contains basic
        information about a movie, you can do so using these{" "}
        <Link to={OVERVIEW.redirect}>modules</Link>.
      </P>

      <MovieSchemaDefinition />

      <P>
        This example only uses data from the <Link to={OVERVIEW.redirect}>modules</Link> provided by
        Chaca, but if you wanted to add a <MiniCode>forChildren</MiniCode> field that indicated if
        the movie is suitable for children depending on the category, you could do it in the
        following way.
      </P>

      <NewMovieSchema />

      <FieldDependency />
    </>
  )
}
