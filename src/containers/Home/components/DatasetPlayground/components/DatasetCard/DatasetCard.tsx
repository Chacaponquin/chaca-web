import { CardHeader, Field } from "./components"
import { useDatasetCard } from "./hooks"

export default function DatasetCard({
  handleCreateSelectDataset,
  index,
}: {
  handleCreateSelectDataset: (i: number) => void
  index: number
}) {
  const {
    openConfig,
    handleEditDataset,
    handleDeleteDataset,
    handleExportDataset,
    handleInteractOpenConfig,
  } = useDatasetCard({ handleCreateSelectDataset, index })

  return (
    <div className='bg-darkColor flex flex-col w-[400px] rounded-md text-white stroke-white'>
      <CardHeader
        openConfig={openConfig}
        handleInteractOpenConfig={handleInteractOpenConfig}
        handleDeleteDataset={handleDeleteDataset}
        handleEditDataset={handleEditDataset}
        handleExportDataset={handleExportDataset}
      />

      <div className='flex flex-col py-2'>
        {["id", "username", "password"].map((field, i) => (
          <Field key={i} field={field} />
        ))}
      </div>
    </div>
  )
}
