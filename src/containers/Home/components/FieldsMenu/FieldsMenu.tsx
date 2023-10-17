import { Fragment, useContext } from "react"
import { CloseSection, DatasetButtons, FieldContainer, NoFieldsMessage } from "./components"
import clsx from "clsx"
import { useDatasetServices } from "@modules/datasets/services"
import { HomeContext } from "@containers/Home/context"

const FieldsMenu = ({
  handleExportSelectedDataset,
  handleAddNewField,
}: {
  handleExportSelectedDataset: () => void
  handleAddNewField: () => void
}) => {
  const { selectedDataset, showFieldsMenu, handleCloseFieldsMenu } = useDatasetServices()
  const { fieldsMenuRef, smallWindow } = useContext(HomeContext)

  const containerClass = clsx(
    "min-w-[300px] max-w-[300px] bg-white border-r-2 dark:border-r-[1px] flex flex-col h-full justify-between",
    { "fit-screen-box": !smallWindow },
    { "top-0 left-0 h-screen absolute z-40": smallWindow },
  )

  return (
    <section className={containerClass} ref={fieldsMenuRef}>
      {smallWindow && showFieldsMenu && (
        <CloseSection handleCloseFieldsMenu={handleCloseFieldsMenu} />
      )}

      <div className="h-full bg-white dark:bg-darkColorLight w-full flex flex-col text-black dark:text-white pt-1">
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
