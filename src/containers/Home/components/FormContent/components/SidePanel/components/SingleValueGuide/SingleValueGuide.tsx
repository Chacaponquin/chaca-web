import { useContext } from "react"
import { useLanguage } from "@modules/shared/modules/appConfig/hooks"
import { v4 as uuid } from "uuid"
import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { schemasServices } from "@modules/schemas/services"
import { ChacaIconButton } from "@modules/shared/components/ChacaButton"
import { Code } from "@modules/shared/assets/icons"
import { ModalContext } from "@modules/modal/context"
import { MODAL_ACTIONS } from "@modules/modal/constants"

export default function SingleValueGuide({ field }: { field: DatasetField<SingleValueDataType> }) {
  const { ARGUMENTS_TITLE_TEXT, TABLE_ARGUMENT_TEXT, TABLE_DESCRIPTION_TEXT } = useLanguage({
    ARGUMENTS_TITLE_TEXT: { en: "Arguments", es: "Parámetros" },
    TABLE_ARGUMENT_TEXT: { en: "Argument", es: "Parámetro" },
    TABLE_DESCRIPTION_TEXT: { en: "Description", es: "Descripción" },
  })

  const { findParent, findType, optionApiRoute } = schemasServices()

  const { handleOpenModal } = useContext(ModalContext)

  const parent = findParent(field.dataType.fieldType.parent)

  const option = findType(parent.parent, field.dataType.fieldType.type)

  const handleOpenTestEndpointModal = () => {
    handleOpenModal({ type: MODAL_ACTIONS.TEST_ENDPOINT, option })
  }

  return (
    <div className='flex flex-col gap-y-3'>
      <div className='flex items-center justify-between'>
        <div className='rounded-sm bg-principalColor px-4 py-1 text-white font-fontBold text-lg w-max'>
          {option.name}
        </div>

        <ChacaIconButton
          icon={<Code size={18} />}
          color='cancel'
          size='small'
          text='Test Endpoint'
          onClick={handleOpenTestEndpointModal}
        />
      </div>

      <p className='text-base text-slate-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iusto minima mollitia
        voluptatum voluptatibus quisquam?
      </p>

      <div className=''>
        <h1 className='font-fontTitle text-lg mb-1'>Api Route</h1>

        <div className='flex items-center w-full'>
          <div className='uppercase px-4 py-1 font-fontBold bg-principalColor text-white border-principalColor border-2 rounded-tl-sm rounded-bl-sm'>
            GET
          </div>
          <div className='px-3 py-1 border-2 border-principalColor w-full rounded-br-sm rounded-tr-sm overflow-x-auto no-scroll'>
            {optionApiRoute(option.route)}
          </div>
        </div>
      </div>

      {option.arguments.length > 0 && (
        <div>
          <h1 className='font-fontTitle text-lg mb-1'>{ARGUMENTS_TITLE_TEXT}</h1>

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
        </div>
      )}
    </div>
  )
}
