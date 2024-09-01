import { HomeContext } from "@containers/Home/context"
import { useDataset } from "@modules/dataset/hooks"
import clsx from "clsx"
import { Fragment, useContext } from "react"
import { CloseSection, DatasetButtons, Field, Loader, NoFieldsMessage } from "./components"

interface Props {
  handleAddNewField(): void
  loading: boolean
}

export default function Aside({ handleAddNewField, loading }: Props) {
  const { selectedSchema, handleCloseFieldsMenu, showFieldsMenu } = useDataset()
  const { smallWindow } = useContext(HomeContext)

  const CLASS = clsx(
    "flex flex-col justify-between",
    "w-full max-w-[320px]",
    "h-full",
    "bg-white dark:bg-scale-3",
    "shadow-lg",
    "px-4",
  )

  return (
    <aside className={CLASS} onClick={(e) => e.stopPropagation()}>
      {smallWindow && showFieldsMenu && (
        <CloseSection handleCloseFieldsMenu={handleCloseFieldsMenu} />
      )}

      {!loading && (
        <div className="h-full w-full flex flex-col text-black dark:text-white pt-1">
          {selectedSchema && selectedSchema.nodes.length > 0 ? (
            <Fragment>
              {selectedSchema.nodes.map((field) => (
                <Field key={field.id} margin={0} field={field} />
              ))}

              <DatasetButtons handleAddNewField={handleAddNewField} />
            </Fragment>
          ) : (
            <NoFieldsMessage handleAddNewField={handleAddNewField} />
          )}
        </div>
      )}

      {loading && <Loader />}
    </aside>
  )
}
