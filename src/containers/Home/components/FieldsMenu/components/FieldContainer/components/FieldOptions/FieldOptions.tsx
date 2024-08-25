import { Config } from "@modules/app/modules/icon/components"
import { FieldConfigMenu } from "./components"
import { ChacaDropdown } from "@form/components"
import { Field } from "@modules/datasets/domain/core"

interface Props {
  field: Field
}

export default function FieldOptions({ field }: Props) {
  return (
    <div className="flex flex-col relative ">
      <ChacaDropdown
        header={
          <button className="dark:fill-white fill-black">
            <Config size={19} />
          </button>
        }
        height={300}
        className="bg-white dark:bg-scale-7 -translate-x-16 text-black dark:text-white shadow-md rounded-sm"
      >
        <FieldConfigMenu field={field} />
      </ChacaDropdown>
    </div>
  )
}
