import { Config } from "@modules/app/modules/icon/components"
import { FieldConfigMenu } from "./components"
import { ChacaPopover } from "@modules/app/modules/form/components"
import { useState } from "react"
import { Field } from "@modules/dataset/domain/core/field"

interface Props {
  field: Field
}

export default function FieldOptions({ field }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col relative">
      <ChacaPopover
        parent={
          <button type="button" className="dark:fill-white fill-black">
            <Config size={19} />
          </button>
        }
        open={open}
        onClose={() => setOpen(false)}
        position="bottom"
      >
        <FieldConfigMenu field={field} />
      </ChacaPopover>
    </div>
  )
}
