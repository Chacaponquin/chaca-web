import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetsHeader, ExportButton, FieldContainer, NoFieldsMessage } from "./components"
import clsx from "clsx"
import { AppConfigContext } from "@modules/shared/context"
import { X } from "@modules/shared/assets/icons"

const FieldsMenu = ({
  handleCreateSelectDataset,
  handleCreateAllDatasets,
}: {
  handleCreateSelectDataset: () => void
  handleCreateAllDatasets: () => void
}) => {
  const { selectedDataset, showFieldsMenu, handleCloseFieldsMenu } = useContext(DatasetsContext)
  const { smallWindow } = useContext(AppConfigContext)

  const containerClass = clsx(
    "min-w-[300px] max-w-[300px] bg-white border-r-2 border-b-2 flex flex-col justify-between",
    { "fit-screen-box": !smallWindow },
    { "top-0 left-0 h-screen absolute z-[50]": smallWindow },
  )

  return (
    <div className={containerClass}>
      <div className='flex flex-col w-full'>
        {smallWindow && showFieldsMenu && (
          <div className='flex justify-end pt-3 px-4'>
            <button onClick={handleCloseFieldsMenu}>
              <X size={18} />
            </button>
          </div>
        )}

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
