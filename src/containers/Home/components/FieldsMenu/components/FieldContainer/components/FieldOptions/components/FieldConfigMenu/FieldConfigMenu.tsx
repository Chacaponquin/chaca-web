import { useTranslation } from "@modules/app/modules/language/hooks"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets"
import { useFieldConfigMenu } from "./hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import { Fragment } from "react"
import { Item } from "./components"

const FieldConfigMenu = ({ field }: { field: DatasetField<FieldDataType> }) => {
  const isMixed = field.dataType.type === DATA_TYPES.MIXED

  const { DELETE_OPTION_TEXT, EDIT_OPTION_TEXT, ADD_FIELD_OPTION_TEXT } = useTranslation({
    EDIT_OPTION_TEXT: { en: "Edit", es: "Editar" },
    DELETE_OPTION_TEXT: { en: "Delete", es: "Borrar" },
    ADD_FIELD_OPTION_TEXT: { en: "Add Field", es: "Añadir Campo" },
  })

  const { handleDeleteField, handleEditField, handleAddSubField } = useFieldConfigMenu({ field })

  return (
    <Fragment>
      <Item text={EDIT_OPTION_TEXT} onClick={handleEditField} />
      {isMixed && <Item text={ADD_FIELD_OPTION_TEXT} onClick={handleAddSubField} />}
      <Item text={DELETE_OPTION_TEXT} onClick={handleDeleteField} />
    </Fragment>
  )
}

export default FieldConfigMenu
