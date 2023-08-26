import { Fragment, useContext } from "react"
import { CloseSection, DatasetButtons, FieldContainer, NoFieldsMessage } from "./components"
import clsx from "clsx"
import { AppContext } from "@modules/app/context"
import { useDatasetServices } from "@modules/datasets/services"

const FieldsMenu = ({
  handleExportSelectedDataset,
  handleAddNewField,
}: {
  handleExportSelectedDataset: () => void
  handleAddNewField: () => void
}) => {
  const { selectedDataset, showFieldsMenu, handleCloseFieldsMenu } = useDatasetServices()
  const { smallWindow } = useContext(AppContext)

  const containerClass = clsx(
    "min-w-[300px] max-w-[300px] bg-white border-r-2 border-b-2 flex flex-col justify-between",
    { "fit-screen-box": !smallWindow },
    { "top-0 left-0 h-screen absolute z-40": smallWindow },
  )

  return (
    <section className={containerClass}>
      {smallWindow && showFieldsMenu && (
        <CloseSection handleCloseFieldsMenu={handleCloseFieldsMenu} />
      )}

      <div className="h-full bg-white w-full flex flex-col">
        {selectedDataset && selectedDataset.fields.length > 0 ? (
          <Fragment>
            {selectedDataset.fields.map((f) => (
              <FieldContainer key={f.id} margin={0} field={f} />
            ))}

            <DatasetButtons
              handleExportSelectedDataset={handleExportSelectedDataset}
              handleAddNewField={handleAddNewField}
            />
          </Fragment>
        ) : (
          <NoFieldsMessage handleAddNewField={handleAddNewField} />
        )}
      </div>
    </section>
  )
}

export default FieldsMenu
