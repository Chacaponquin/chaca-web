import { DATASET_STORE } from "@modules/docs/domain/core/sections/concepts"
import { Link, Params } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"
import { Fragment } from "react"

export default function WhereParams() {
  const params: Param[] = [
    {
      name: "currentFields",
      description: "Objeto con todos los campos generados hasta ese momento",
      params: [],
      required: false,
      types: ["any"],
    },
    {
      name: "refFields",
      description: "Objeto con los campos generados del documento a referenciar",
      params: [],
      required: false,
      types: ["any"],
    },
    {
      name: "store",
      description: (
        <Fragment>
          Estado actual del dataset en el que se encuentra.{" "}
          <Link to={DATASET_STORE.redirect}>Leer más</Link>
        </Fragment>
      ),
      params: [],
      required: false,
      types: ["DatasetStore"],
    },
  ]

  return <Params params={params} />
}
