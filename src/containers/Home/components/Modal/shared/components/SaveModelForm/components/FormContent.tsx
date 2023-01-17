import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"

export default function FormContent() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col'>
        <label htmlFor='' className='font-fontBold text-base'>
          Model name
        </label>
        <InputText className='w-full text-sm' />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='' className='font-fontBold text-base'>
          Description
        </label>
        <InputTextarea className='w-full resize-none text-sm' />
      </div>
    </div>
  )
}
