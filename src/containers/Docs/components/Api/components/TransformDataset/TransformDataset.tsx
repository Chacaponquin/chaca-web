import { H2, Link, MiniCode, P } from "@markdown/components/Markdown/components"
import { Route } from "../../shared/components"
import { DATASET, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Body, Example, Structure, Try } from "./components"
import { BODY, EXAMPLE } from "@modules/docs/domain/core/sections/api/transform-dataset"

export default function TransformDataset() {
  return (
    <>
      <Route method="post" url="dataset/transform" />

      <P>
        Esta ruta permite transformar datos generados de un{" "}
        <Link to={DATASET.redirect}>dataset</Link> en cualquiera de los formatos definidos. Esta
        ruta devuelve como resultado un arreglo con la información de cada archivo creado. Cada
        objeto del arreglo tendría la siguiente estructura.
      </P>

      <Structure />

      <H2 title={BODY} />

      <P>En el cuerpo de la petición se deben definir los siguientes parámetros.</P>

      <Body />

      <H2 title={EXAMPLE} />

      <P>
        En el siguiente ejemplo se muestra como se generaría un{" "}
        <Link to={DATASET.redirect}>dataset</Link> que contiene los{" "}
        <Link to={SCHEMA.redirect}>schemas</Link> <MiniCode>User</MiniCode> y{" "}
        <MiniCode>Product</MiniCode> y su posterior transpilación a formato{" "}
        <MiniCode>json</MiniCode>.
      </P>

      <Example />

      <Try />
    </>
  )
}
