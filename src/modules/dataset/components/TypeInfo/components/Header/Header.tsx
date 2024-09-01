import { Danger, Info, Tip, X } from "@modules/app/modules/icon/components"

interface Props {
  handleClose(): void
  header: string
  type: "danger" | "default" | "warning"
}

export default function Header({ handleClose, header, type }: Props) {
  return (
    <div className="flex items-center gap-x-5 justify-between">
      <div className="flex items-center gap-x-2.5">
        <i className="dark:stroke-white stroke-black">
          {type === "default" && <Info size={18} />}
          {type === "danger" && <Danger size={18} />}
          {type === "warning" && <Tip size={18} />}
        </i>

        <h2 className="font-fontMedium text-sm dark:text-white text-black">{header}</h2>
      </div>

      <button type="button" onClick={handleClose} className="dark:fill-white fill-black">
        <X size={15} />
      </button>
    </div>
  )
}
