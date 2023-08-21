import { Fragment } from "react"
import { Change, Delete } from "@modules/shared/assets/icons"
import { v4 as uuid } from "uuid"
import { FieldNode } from "@modules/datasets/domain"
import { FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { ChacaIconButton } from "@form/components"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import { useFieldInfoHeader } from "./hooks"

const FieldInfoHeader = ({ selectField }: { selectField: FieldNode<FieldDataType> }) => {
  const UI_TEXT = useLanguage({
    EDIT_TEXT: { en: "Edit", es: "Editar" },
    DELETE_TEXT: { en: "Delete", es: "Borrar" },
  })

  const { handleDelete, handleEdit, location } = useFieldInfoHeader(selectField)

  return (
    <div className='w-full bg-white py-2 flex justify-between items-center px-5 border-b-2 h-[50px]'>
      <div className='flex gap-3 text-lg'>
        {location.map((el, i) => (
          <Fragment key={uuid()}>
            <p className='mb-0 font-fontBold'>{el}</p>
            {i !== location.length - 1 && <p className='mb-0 font-fontBold'>{"/"}</p>}
          </Fragment>
        ))}
      </div>

      <div className='flex gap-3 items-center'>
        <ChacaIconButton
          icon={<Change size={16} />}
          color={"primary"}
          size={"small"}
          text={UI_TEXT.EDIT_TEXT}
          onClick={handleEdit}
        />

        <ChacaIconButton
          icon={<Delete size={16} />}
          color={"danger"}
          size={"small"}
          text={UI_TEXT.DELETE_TEXT}
          onClick={handleDelete}
        />
      </div>
    </div>
  )
}

export default FieldInfoHeader
