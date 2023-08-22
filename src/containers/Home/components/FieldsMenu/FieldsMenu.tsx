import { Fragment, useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import { DatasetButtons, DatasetsHeader, FieldContainer, NoFieldsMessage } from "./components"
import clsx from "clsx"
import { AppContext } from "@modules/app/context"
import { X } from "@modules/app/modules/icon/components"

const FieldsMenu = ({ handleCreateSelectDataset }: { handleCreateSelectDataset: () => void }) => {
  const { selectedDataset, showFieldsMenu, handleCloseFieldsMenu } = useContext(DatasetsContext)
  const { smallWindow } = useContext(AppContext)

  const containerClass = clsx(
    "min-w-[300px] max-w-[300px] bg-white border-r-2 border-b-2 flex flex-col justify-between",
    { "fit-screen-box": !smallWindow },
    { "top-0 left-0 h-screen absolute z-40": smallWindow },
  )

  return (
    <section className={containerClass}>
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
          <Fragment>
            {selectedDataset.fields.map((f) => (
              <FieldContainer key={f.id} margin={0} field={f} />
            ))}

            <DatasetButtons />
          </Fragment>
        ) : (
          <NoFieldsMessage />
        )}
      </div>
    </section>
  )
}

export default FieldsMenu
