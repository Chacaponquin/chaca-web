import { Danger, Info, Tip, X } from "@modules/app/modules/icon/components"

interface Props {
  handleClose(): void
  header: string
  type: "danger" | "default" | "warning"
}

export default function Header({ handleClose, header, type }: Props) {
  return (
    <div className="flex items-center gap-x-5 justify-between">
      <div className="flex items-center gap-x-3">
        <i className="stroke-white">
          {type === "default" && <Info size={20} />}
          {type === "danger" && <Danger size={20} />}
          {type === "warning" && <Tip size={20} />}
        </i>

        <h2 className="font-fontMedium text-base text-white">{header}</h2>
      </div>

      <button type="button" onClick={handleClose} className="fill-white">
        <X size={18} />
      </button>
    </div>
  )
}
