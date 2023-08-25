import { ClickPointProps } from "@containers/Home/components/DatasetPlayground/interfaces/point.interface"
import { Key } from "@modules/app/modules/icon/components"
import { DatasetField } from "@modules/datasets/interfaces/dataset_field.interface"
import { MouseEvent } from "react"
import clsx from "clsx"

export default function Field({
  field,
  handleClickPoint,
  selectFieldPoint,
}: {
  field: DatasetField
  handleClickPoint(p: ClickPointProps): void
  selectFieldPoint: null | string
}) {
  const isSelected = selectFieldPoint === field.id

  const POINT_CLASS = clsx(
    "h-[12px] w-[12px] bg-white absolute translate-y-[2px] rounded-full cursor-pointer",
    { "border border-2 border-black": isSelected },
  )

  const KEY_CLASS = clsx({ invisible: !field.isKey })

  function handleClick(e: MouseEvent) {
    handleClickPoint({ event: e, fieldId: field.id })
  }

  return (
    <div className="relative flex items-center">
      <div className={POINT_CLASS + " left-[-6px]"}></div>

      <div className="flex w-full text-lg items-center py-2 px-7 justify-between">
        <div className="flex items-center gap-x-3">
          <div className={KEY_CLASS}>
            <Key size={20} />
          </div>

          <p className="font-fontCodeBold">{field.name}</p>
        </div>

        <p className="font-fontCodeBold">id.uuid</p>
      </div>

      <div className={POINT_CLASS + " right-[-6px]"} onClick={handleClick}></div>
    </div>
  )
}
