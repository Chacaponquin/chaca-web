import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetsHeader, ExportButton, FieldContainer, NoFieldsMessage } from "./components"

const FieldsMenu = ({
  handleCreateSelectDataset,
  handleCreateAllDatasets,
}: {
  handleCreateSelectDataset: () => void
  handleCreateAllDatasets: () => void
}) => {
  const { selectedDataset } = useContext(DatasetsContext)

  return (
    <div className='fit-screen-box min-w-[300px] max-w-[300px] bg-white border-r-2 border-b-2 flex flex-col justify-between'>
      <div className='flex flex-col w-full'>
        <DatasetsHeader handleCreateSelectDataset={handleCreateSelectDataset} />

        <div className='h-full bg-white w-full flex flex-col'>
          {selectedDataset && selectedDataset.fields.length > 0 ? (
            selectedDataset.fields.map((f) => <FieldContainer key={f.id} margin={0} field={f} />)
          ) : (
            <NoFieldsMessage />
          )}
        </div>
      </div>

      <ExportButton handleExportAllDatasets={handleCreateAllDatasets} />
    </div>
  )
}

export default FieldsMenu
