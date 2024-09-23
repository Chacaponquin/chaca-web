import { DATASET, DATASET_STORE, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Fragment } from "react"

export default function Props() {
  const params: Param[] = [
    {
      types: ["any"],
      description: "Objeto con los campos creados del documento hasta ese momento",
      name: "currentFields",
      params: [],
      required: false,
    },
    {
      types: ["DatasetStore"],
      description: (
        <Fragment>
          Estado actual del <Link to={DATASET.redirect}>dataset</Link> para acceder a datos de otros{" "}
          <Link to={SCHEMA.redirect}>schemas</Link>.{" "}
          <Link to={DATASET_STORE.redirect}>Leer más sobre la Dataset Store</Link>
        </Fragment>
      ),
      name: "store",
      params: [],
      required: false,
    },
  ]

  return <Params params={params} />
}
