import { Checkbox } from "primereact/checkbox"
import { InputNumber } from "primereact/inputnumber"
import { Slider } from "primereact/slider"
import { useLanguage } from "@modules/shared/hooks"
import { FieldInfoDTO } from "@modules/datasets/dto/fieldInfo.dto"
import { ChacaTextInput } from "@form"

export interface FieldFormProps {
  field: FieldInfoDTO
  handleChangeName: (n: string) => void
  handleChangeIsArray: (v: boolean) => void
  handleChangeMinIsArray: (m: number | null) => void
  handleChangeMaxIsArray: (m: number | null) => void
  handleChangePossibleNull: (v: boolean) => void
  handleChangePossibleNullValue: (v: number) => void
}

const FieldForm = ({
  field,
  handleChangeIsArray,
  handleChangeMaxIsArray,
  handleChangeMinIsArray,
  handleChangeName,
  handleChangePossibleNull,
  handleChangePossibleNullValue,
}: FieldFormProps) => {
  const { FIELD_NAME_TEXT } = useLanguage({
    FIELD_NAME_TEXT: { en: "Field name", es: "Nombre del campo" },
  })

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-3'>
        <label htmlFor='' className='font-fontBold text-lg whitespace-nowrap'>
          {FIELD_NAME_TEXT}:
        </label>
        <ChacaTextInput
          onChange={handleChangeName}
          placeholder='Field name...'
          value={field.name}
        />
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <Checkbox
                checked={field.isArray ? true : false}
                onChange={(e) => handleChangeIsArray(e.checked)}
              />
              <p className='mb-0'>Is Array</p>
            </div>

            {field.isArray !== null && (
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                  <p className='mb-0'>Min:</p>
                  <InputNumber
                    className='w-[75px] !text-sm'
                    value={field.isArray.min}
                    min={0}
                    max={field.isArray.max}
                    step={1}
                    onChange={(e) => handleChangeMinIsArray(e.value)}
                  />
                </div>
                <div className='flex items-center gap-1'>
                  <p className='mb-0'>Max:</p>
                  <InputNumber
                    className='w-[75px] !text-sm'
                    value={field.isArray.max}
                    min={field.isArray.min}
                    max={1000}
                    step={1}
                    onChange={(e) => handleChangeMaxIsArray(e.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <Checkbox
                checked={field.isPosibleNull > 0 ? true : false}
                onChange={(e) => handleChangePossibleNull(e.checked)}
              />
              <p className='mb-0'>Possible null</p>
            </div>

            {field.isPosibleNull > 0 && (
              <div className='flex gap-4 items-center'>
                <Slider
                  value={field.isPosibleNull}
                  orientation='horizontal'
                  min={1}
                  max={100}
                  step={1}
                  className='w-[200px]'
                  onChange={(e) => handleChangePossibleNullValue(Number(e.value.toString()))}
                />

                <p className='mb-0'>{field.isPosibleNull}%</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FieldForm
