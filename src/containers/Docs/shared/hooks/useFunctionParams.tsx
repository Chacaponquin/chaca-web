import { DATASET, DATASET_STORE, SCHEMA } from "@modules/docs/domain/core/sections/concepts"
import { Link } from "@modules/shared/modules/markdown/components/Markdown/components"
import { Param } from "@modules/shared/modules/markdown/components/Markdown/components/Params/domain"

export default function useFunctionParams() {
  const CURRENT_FIELDS_PARAM: Param = {
    types: ["any"],
    description: "Objeto con los campos creados del documento hasta ese momento",
    name: "currentFields",
    params: [],
    required: false,
  }

  const DATASET_STORE_PARAM: Param = {
    types: ["DatasetStore"],
    description: (
      <>
        Almacén que contiene el estado actual del <Link to={DATASET.redirect}>dataset</Link> para
        acceder a datos de otros <Link to={SCHEMA.redirect}>schemas</Link>.{" "}
        <Link to={DATASET_STORE.redirect}>Leer más sobre la Dataset Store</Link>
      </>
    ),
    name: "store",
    params: [],
    required: false,
  }

  return { CURRENT_FIELDS_PARAM, DATASET_STORE_PARAM }
}
