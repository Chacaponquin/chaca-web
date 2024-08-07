import { Bars, X } from "@modules/app/modules/icon/components"

interface Props {
  open: boolean
  handleChange(): void
}

export default function Menu({ handleChange, open }: Props) {
  return (
    <div className="fill-white md:hidden flex flex-col">
      {open ? (
        <button onClick={handleChange}>
          <X size={22} />
        </button>
      ) : (
        <button onClick={handleChange}>
          <Bars size={26} />
        </button>
      )}
    </div>
  )
}
