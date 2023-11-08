import { Fragment, useContext } from "react"
import { CloseSection, DatasetButtons, FieldContainer, NoFieldsMessage } from "./components"
import clsx from "clsx"
import { useDatasets } from "@modules/datasets/hooks"
import { HomeContext } from "@containers/Home/context"

interface Props {
  handleExportSelectedDataset: () => void
  handleAddNewField: () => void
}

export default function FieldsMenu({ handleExportSelectedDataset, handleAddNewField }: Props) {
  const { selectedDataset, handleCloseFieldsMenu, showFieldsMenu } = useDatasets()
  const { fieldsMenuRef, smallWindow } = useContext(HomeContext)

  const containerClass = clsx(
    "bg-white dark:bg-scale-3 min-w-[300px] max-w-[300px]  flex flex-col h-full justify-between",
    { "top-0 left-0 h-screen absolute z-40 shadow-lg": smallWindow },
    {
      "shadow-lg": !smallWindow,
    },
  )

  return (
    <section className={containerClass} ref={fieldsMenuRef}>
      {smallWindow && showFieldsMenu && (
        <CloseSection handleCloseFieldsMenu={handleCloseFieldsMenu} />
      )}

      <div className="h-full w-full flex flex-col text-black dark:text-white pt-1">
        {selectedDataset && selectedDataset.fields.length > 0 ? (
          <Fragment>
            {selectedDataset.fields.map((field) => (
              <FieldContainer key={field.id} margin={0} field={field} />
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
