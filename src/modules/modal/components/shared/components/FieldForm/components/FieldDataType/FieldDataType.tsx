import { ChacaSelect } from "@form/components"
import { useDatatypes } from "@modules/datasets/hooks"
import { DATA_TYPES } from "@modules/schemas/constants"

export default function FieldDataType({
  label,
  handleChangeDataType,
  dataType,
}: {
  label: string
  handleChangeDataType: (i: number) => void
  dataType: DATA_TYPES
}) {
  const { DATA_TYPES_ARRAY, foundDataTypeByName } = useDatatypes()
  const foundDataType = foundDataTypeByName(dataType)

  return (
    <section className='flex items-center gap-3'>
      <label htmlFor='' className='font-fontMedium text-lg whitespace-nowrap'>
        {label}:
      </label>

      <ChacaSelect
        placeholder='Tipo'
        options={DATA_TYPES_ARRAY}
        labelKey='title'
        valueKey='id'
        value={foundDataType.id}
        dimension='large'
        onChange={(v) => handleChangeDataType(v as number)}
      />
    </section>
  )
}
