import { Fragment } from "react"
import { Change, Delete } from "@shared/assets/icons"
import { v4 as uuid } from "uuid"
import { FieldNode } from "@shared/helpers/DatasetTree"
import { FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { ChacaIconButton } from "@shared/components/ChacaButton"
import { useLanguage } from "@shared/hooks"
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
          icon={<Change size={19} />}
          color={"primary"}
          size={"medium"}
          text={UI_TEXT.EDIT_TEXT}
          onClick={handleEdit}
        />

        <ChacaIconButton
          icon={<Delete size={19} />}
          color={"danger"}
          size={"medium"}
          text={UI_TEXT.DELETE_TEXT}
          onClick={handleDelete}
        />
      </div>
    </div>
  )
}

export default FieldInfoHeader
