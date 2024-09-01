import { Config } from "@modules/app/modules/icon/components"
import { FieldConfigMenu } from "./components"
import { ChacaDropdown } from "@form/components"
import { Field } from "@modules/dataset/domain/core"

interface Props {
  field: Field
}

export default function FieldOptions({ field }: Props) {
  return (
    <div className="flex flex-col relative">
      <ChacaDropdown
        header={
          <button className="dark:fill-white fill-black">
            <Config size={19} />
          </button>
        }
        height={300}
        className=""
      >
        <FieldConfigMenu field={field} />
      </ChacaDropdown>
    </div>
  )
}
