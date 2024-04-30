import { useTranslation } from "@modules/app/modules/language/hooks"
import { useFieldConfigMenu } from "./hooks"
import { Fragment } from "react"
import { Item } from "./components"
import { ExportDatatypeDTO } from "@modules/datasets/dto/field"
import { Field, MixedNode } from "@modules/datasets/domain/tree"

interface Props {
  field: Field<ExportDatatypeDTO>
}

export default function FieldConfigMenu({ field }: Props) {
  const isMixed = field instanceof MixedNode

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
