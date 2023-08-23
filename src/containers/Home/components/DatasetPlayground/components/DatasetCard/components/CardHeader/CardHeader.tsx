import { Config, DatasetMenu } from "./components"

export default function CardHeader({
  openConfig,
  handleInteractOpenConfig,
  handleDeleteDataset,
  handleEditDataset,
  handleExportDataset,
}: {
  openConfig: boolean
  handleInteractOpenConfig: (e: React.MouseEvent) => void
  handleEditDataset: () => void
  handleDeleteDataset: () => void
  handleExportDataset: () => void
}) {
  return (
    <header className='flex relative justify-center py-5 px-10 border-b-[1px] border-white items-center gap-x-3'>
      <h1 className='text-3xl font-fontBold'>User</h1>
      <p className='text-2xl'>(50)</p>

      <Config handleInteractOpenConfig={handleInteractOpenConfig} />

      {openConfig && (
        <DatasetMenu
          handleDeleteDataset={handleDeleteDataset}
          handleEditDataset={handleEditDataset}
          handleExportDataset={handleExportDataset}
        />
      )}
    </header>
  )
}
