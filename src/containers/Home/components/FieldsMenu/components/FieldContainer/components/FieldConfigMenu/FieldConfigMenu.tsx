import { useLanguage } from "@modules/app/modules/language/hooks"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { useFieldConfigMenu } from "./hooks"

const FieldConfigMenu = ({ field }: { field: DatasetField<FieldDataType> }) => {
  const divClass =
    "cursor-pointer duration-300 w-full transition-all px-5 py-1.5 hover:bg-slate-200 text-md whitespace-nowrap"

  const { ADD_FIELD_OPTION_TEXT, DELETE_OPTION_TEXT, EDIT_OPTION_TEXT } = useLanguage({
    EDIT_OPTION_TEXT: { en: "Edit", es: "Editar" },
    DELETE_OPTION_TEXT: { en: "Delete", es: "Borrar" },
    ADD_FIELD_OPTION_TEXT: { en: "Add Field", es: "Añadir Campo" },
  })

  const { handleAddField, handleDeleteField, handleEditField } = useFieldConfigMenu(field)

  return (
    <div className='absolute bg-white shadow-md rounded-sm top-[25px] -translate-x-[120px]'>
      <div className={divClass} onClick={handleEditField}>
        {EDIT_OPTION_TEXT}
      </div>
      <div className={divClass} onClick={handleAddField}>
        {ADD_FIELD_OPTION_TEXT}
      </div>
      <div className={divClass} onClick={handleDeleteField}>
        {DELETE_OPTION_TEXT}
      </div>
    </div>
  )
}

export default FieldConfigMenu
