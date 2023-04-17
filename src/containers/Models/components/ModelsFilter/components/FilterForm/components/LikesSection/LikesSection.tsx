import { FormLikes } from "@containers/Models/interfaces/filterForm.interface"
import { ChacaNumberInput } from "@form/components"
import { divClass, labelClass } from "../../helpers/classes"

export default function LikesSection({
  filterLikes,
  handleChangeLikes,
}: {
  filterLikes: FormLikes
  handleChangeLikes: (key: keyof FormLikes, value: number) => void
}) {
  return (
    <div className={divClass}>
      <h1 className={labelClass}>Likes</h1>
      <div className='flex items-center gap-y-2 w-full flex-col'>
        <div className='flex items-center w-full gap-x-2'>
          <p className='text-base'>Min:</p>
          <ChacaNumberInput
            onChange={(value) => handleChangeLikes("min", value)}
            min={0}
            value={filterLikes.min}
            max={filterLikes.max}
          />
        </div>

        <div className='flex items-center w-full gap-x-2'>
          <p className='text-base'>Max:</p>
          <ChacaNumberInput
            onChange={(value) => handleChangeLikes("max", value)}
            min={filterLikes.min}
            value={filterLikes.max}
          />
        </div>
      </div>
    </div>
  )
}
