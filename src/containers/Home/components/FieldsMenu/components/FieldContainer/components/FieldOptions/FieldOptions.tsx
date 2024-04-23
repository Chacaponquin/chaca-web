import { DatasetField, FieldDataType } from "@modules/datasets/interfaces/datasets"
import { Config } from "@modules/app/modules/icon/components"
import { FieldConfigMenu } from "./components"
import { ChacaDropdown } from "@form/components"

interface Props {
  field: DatasetField<FieldDataType>
}

export default function FieldOptions({ field }: Props) {
  return (
    <div className="flex flex-col relative dark:fill-white fill-black">
      <ChacaDropdown
        header={
          <button>
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
