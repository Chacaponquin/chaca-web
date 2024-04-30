import { Bars } from "@modules/app/modules/icon/components"
import { useDatasets } from "@modules/datasets/hooks"

export default function OpenFields() {
  const { handleOpenFieldsMenu } = useDatasets()

  return (
    <button onClick={handleOpenFieldsMenu} className="mr-4 fill-black dark:fill-white">
      <Bars size={22} />
    </button>
  )
}
