import { Search } from "@modules/shared/assets/icons"

export default function SearchInput() {
  return (
    <div className='flex w-full py-3 justify-center px-20'>
      <div className='flex w-full items-center bg-slate-200 rounded-sm py-2 px-5 gap-4'>
        <input
          type='text'
          placeholder='Search...'
          className='text-base bg-transparent border-none outline-none w-full'
        />
        <Search size={20} />
      </div>
    </div>
  )
}
