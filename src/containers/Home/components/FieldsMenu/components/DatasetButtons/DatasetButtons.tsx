import { ChacaSimpleButton } from "@form/components"

export default function DatasetButtons() {
  return (
    <div className='flex justify-end mt-4 gap-4'>
      <ChacaSimpleButton color='primary' size='medium' text='Nuevo Campo' />
      <ChacaSimpleButton text='Exportar' color='secondary' size='medium' />
    </div>
  )
}
