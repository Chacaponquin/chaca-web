import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets.interface"
import { Config } from "@modules/app/modules/icon/components"
import { FieldConfigMenu } from "./components"

export default function FieldOptions({
  field,
  handleInteractOpenMenu,
  openMenu,
}: {
  openMenu: boolean
  handleInteractOpenMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  field: DatasetField<FieldDataType>
}) {
  return (
    <div className="flex flex-col relative dark:fill-white fill-black">
      <button onClick={handleInteractOpenMenu}>
        <Config size={19} />
        {openMenu && <FieldConfigMenu field={field} />}
      </button>
    </div>
  )
}
