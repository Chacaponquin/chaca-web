import { useLanguage } from "@modules/app/modules/language/hooks"
import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { useFieldConfigMenu } from "./hooks"
import clsx from "clsx"
import { useThemeServices } from "@modules/app/modules/theme/services"
import { THEME } from "@modules/app/modules/theme/constants/THEME"
import { DATA_TYPES } from "@modules/schemas/constants"

const FieldConfigMenu = ({ field }: { field: DatasetField<FieldDataType> }) => {
  const { theme } = useThemeServices()

  const isMixed = field.dataType.type === DATA_TYPES.MIXED

  const DIV_CLASS = clsx(
    "cursor-pointer duration-300 w-full transition-all px-5 py-1.5 text-md whitespace-nowrap",
    { "hover:bg-slate-200": theme === THEME.LIGHT },
  )

  const { DELETE_OPTION_TEXT, EDIT_OPTION_TEXT, ADD_FIELD_OPTION_TEXT } = useLanguage({
    EDIT_OPTION_TEXT: { en: "Edit", es: "Editar" },
    DELETE_OPTION_TEXT: { en: "Delete", es: "Borrar" },
    ADD_FIELD_OPTION_TEXT: { en: "Add Field", es: "Añadir Campo" },
  })

  const { handleDeleteField, handleEditField, handleAddSubField } = useFieldConfigMenu({ field })

  return (
    <ul className="absolute bg-white dark:bg-darkColorExtraLight text-black dark:text-white shadow-md rounded-sm top-[25px] -translate-x-[70px] z-50">
      <li className={DIV_CLASS} onClick={handleEditField}>
        {EDIT_OPTION_TEXT}
      </li>

      {isMixed && (
        <li className={DIV_CLASS} onClick={handleAddSubField}>
          {ADD_FIELD_OPTION_TEXT}
        </li>
      )}

      <li className={DIV_CLASS} onClick={handleDeleteField}>
        {DELETE_OPTION_TEXT}
      </li>
    </ul>
  )
}

export default FieldConfigMenu
