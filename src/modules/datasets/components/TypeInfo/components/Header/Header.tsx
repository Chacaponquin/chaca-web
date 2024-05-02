import { Info, X } from "@modules/app/modules/icon/components"

interface Props {
  handleClose(): void
  header: string
}

export default function Header({ handleClose, header }: Props) {
  return (
    <div className="flex items-center gap-x-5 justify-between">
      <div className="flex items-center gap-x-3">
        <i className="stroke-white">
          <Info size={20} />
        </i>

        <h2 className="font-fontMedium text-base text-white">{header}</h2>
      </div>

      <button type="button" onClick={handleClose} className="fill-white">
        <X size={18} />
      </button>
    </div>
  )
}
