import { Key } from "@modules/app/modules/icon/components"

export default function Field({ field }: { field: string }) {
  return (
    <div className='flex text-lg items-center py-2 px-7 justify-between'>
      <div className='flex items-center gap-x-3'>
        <Key size={20} />
        <p className='font-fontCodeBold'>{field}</p>
      </div>

      <p className='font-fontCodeBold'>id.uuid</p>
    </div>
  )
}
