import { Key } from "@modules/app/modules/icon/components"

export default function DatasetCard() {
  return (
    <div className='bg-darkColor flex flex-col w-[400px] rounded text-white stroke-white'>
      <header className='flex justify-center py-5 px-10 border-b-[1px] border-white items-center gap-x-3'>
        <h1 className='text-3xl font-fontBold'>User</h1>
        <p className='text-2xl'>(50)</p>
      </header>

      <div className='flex flex-col py-2'>
        {["id", "username", "password"].map((field, i) => (
          <div key={i} className='flex text-lg items-center py-2 px-10 justify-between'>
            <div className='flex items-center gap-x-3'>
              <Key size={20} />
              <p className='font-fontMedium'>{field}</p>
            </div>

            <p className='font-fontMedium'>id.uuid</p>
          </div>
        ))}
      </div>
    </div>
  )
}
