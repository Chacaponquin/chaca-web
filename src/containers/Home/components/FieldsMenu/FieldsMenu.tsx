import { Fragment, useContext } from "react"
import { CloseSection, DatasetButtons, FieldContainer, NoFieldsMessage } from "./components"
import clsx from "clsx"
import { useDatasets } from "@modules/datasets/hooks"
import { HomeContext } from "@containers/Home/context"

interface Props {
  handleExportSelectedDataset(): void
  handleAddNewField(): void
}

export default function FieldsMenu({ handleExportSelectedDataset, handleAddNewField }: Props) {
  const { selectedDataset, handleCloseFieldsMenu, showFieldsMenu } = useDatasets()
  const { fieldsMenuRef, smallWindow } = useContext(HomeContext)

  const CLASS = clsx(
    "flex flex-col justify-between",
    "w-full max-w-[300px]",
    "h-full",
    "bg-white dark:bg-scale-3",

    { "top-0 left-0 h-screen absolute z-40 shadow-lg": smallWindow },

    {
      "shadow-lg": !smallWindow,
    },
  )

  return (
    <section className={CLASS} ref={fieldsMenuRef}>
      {smallWindow && showFieldsMenu && (
        <CloseSection handleCloseFieldsMenu={handleCloseFieldsMenu} />
      )}

      <div className="h-full w-full flex flex-col text-black dark:text-white pt-1">
        {selectedDataset && selectedDataset.nodes.length > 0 ? (
          <Fragment>
            {selectedDataset.nodes.map((field) => (
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
