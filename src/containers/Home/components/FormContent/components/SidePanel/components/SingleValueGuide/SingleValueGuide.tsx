import { useMemo, Fragment } from "react"
import { useLanguage } from "../../../../../../../../shared/hooks"
import { v4 as uuid } from "uuid"
import { useUtils } from "../../../../../../hooks/useUtils"
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../../../shared/interfaces/datasets.interface"

export default function SingleValueGuide  ({ field }: { field: DatasetField<SingleValueDataType> })  {
  const { ARGUMENTS_TITLE_TEXT, TABLE_ARGUMENT_TEXT, TABLE_DESCRIPTION_TEXT } = useLanguage({
    ARGUMENTS_TITLE_TEXT: { en: "Arguments", es: "Parámetros" },
    TABLE_ARGUMENT_TEXT: { en: "Argument", es: "Parámetro" },
    TABLE_DESCRIPTION_TEXT: { en: "Description", es: "Descripción" },
  })

  const { findParent, findType } = useUtils()

  const parent = useMemo(() => {
    return findParent(field.dataType.fieldType.parent)
  }, [field.dataType.fieldType.parent, findParent])

  const option = useMemo(() => {
    return findType(parent.parent, field.dataType.fieldType.type)
  }, [field.dataType.fieldType.type, findType, parent])

  return (
    <div className='flex flex-col h-full'>
      <div className='rounded-sm bg-principalColor px-4 py-1 text-white font-fontBold text-lg w-max'>
        {option.name}
      </div>

      <p className='py-3 text-base text-slate-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto minima mollitia
        voluptatum voluptatibus quisquam?
      </p>

      {option.arguments.length > 0 && (
        <Fragment>
          <h1 className='font-fontExtraBold text-lg mb-1'>{ARGUMENTS_TITLE_TEXT}</h1>

          <table className='table-auto w-full border-2 rounded'>
            <thead>
              <tr>
                <th className='bg-slate-200 py-1 pl-4 text-left text-sm'>{TABLE_ARGUMENT_TEXT}</th>
                <th className='bg-slate-200 py-1 pl-4 text-left text-sm'>
                  {TABLE_DESCRIPTION_TEXT}
                </th>
              </tr>
            </thead>
            <tbody>
              {option.arguments.map((a) => (
                <tr key={uuid()}>
                  <td className='pl-4 text-left text-sm py-1'>{a.argument}</td>
                  <td className='pl-4 text-left text-sm py-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam incidunt
                    laborum.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </div>
  )
}


