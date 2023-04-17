import { ChacaSelect } from "@form/components"
import { FILTER_TYPES } from "@modules/shared/constant"
import { divClass, labelClass } from "../../helpers/classes"

export default function FilterSelect({
  filterType,
  handleChangeFilterType,
}: {
  filterType: FILTER_TYPES
  handleChangeFilterType: (value: FILTER_TYPES) => void
}) {
  return (
    <div className={divClass}>
      <h1 className={labelClass}>Filter</h1>
      <ChacaSelect
        options={Object.values(FILTER_TYPES).map((value) => {
          return { label: value, value }
        })}
        onChange={(v) => handleChangeFilterType(v as FILTER_TYPES)}
        labelKey='label'
        valueKey='value'
        placeholder='Select a Filter Type'
        value={filterType}
      />
    </div>
  )
}
