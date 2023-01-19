import { Search } from "../../../../../../shared/assets/icons"

export default function ApiSearch() {
  return (
    <div className='mb-3'>
      <div className='rounded-sm flex px-4 py-1 bg-slate-100 items-center'>
        <Search size={18} />

        <input
          type='text'
          className='border-none outline-none py-1 px-3 text-base bg-transparent'
          placeholder='Search...'
        />
      </div>
    </div>
  )
}
