import { Search } from "@modules/shared/assets/icons"
import { useState } from "react"
import clsx from "clsx"

export interface ChacaSearchInputProps {
  size?: "full" | number
}

export default function ChacaSearchInput({ size = "full" }: ChacaSearchInputProps) {
  const [search, setSearch] = useState("")

  const handleChangeSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <div
      className='py-1 px-5 bg-slate-200 rounded-sm flex items-center w-full gap-2'
      style={{
        width: size === "full" ? `100%` : `${size}px`,
      }}
    >
      <input
        type='text'
        onChange={(e) => {
          handleChangeSearch(e.target.value)
        }}
        className='border-none text-base bg-transparent w-full outline-none'
        placeholder='Search...'
      />
      <Search size={18} />
    </div>
  )
}
