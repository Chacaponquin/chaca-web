import { Bars } from "@modules/app/modules/icon/components"
import { useDataset } from "@modules/dataset/hooks"

export default function OpenFields() {
  const { handleOpenFieldsMenu } = useDataset()

  return (
    <button onClick={handleOpenFieldsMenu} className="mr-4 fill-black dark:fill-white">
      <Bars size={22} />
    </button>
  )
}
