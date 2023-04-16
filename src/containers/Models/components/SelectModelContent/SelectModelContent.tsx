import { UserDatasetModel } from "@containers/Models/interfaces/models.interface"
import { ExampleCode } from "@modules/shared/modules/markdown/components"
export default function SelectModelContent({
  selectModel,
}: {
  selectModel: UserDatasetModel | null
}) {
  return (
    <div className='2xl:flex hidden h-full min-w-[620px] bg-gradient-to-br from-principalColor to-secondColor px-10 py-8'>
      <div className='rounded bg-darkColor w-full h-full no-scroll overflow-y-auto'>
        <pre>{selectModel && <ExampleCode code={selectModel.model} language='json' />}</pre>
      </div>
    </div>
  )
}
