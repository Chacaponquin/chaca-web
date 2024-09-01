import { Fragment, useContext } from "react"
import { Aside } from "./components"
import { HomeContext } from "@containers/Home/context"
import clsx from "clsx"
import { useDataset } from "@modules/dataset/hooks"

interface Props {
  handleAddNewField(): void
  loading: boolean
}

export default function FieldsMenu({ handleAddNewField, loading }: Props) {
  const { smallWindow } = useContext(HomeContext)
  const { handleCloseFieldsMenu } = useDataset()

  const CLASS = clsx(
    "flex",
    "w-full h-screen",
    "absolute top-0 left-0",
    "z-50",
    "bg-scale-5/50",
    "overflow-y-auto",
    "pr-4",
  )

  return (
    <Fragment>
      {smallWindow && (
        <div className={CLASS} onClick={handleCloseFieldsMenu}>
          <Aside handleAddNewField={handleAddNewField} loading={loading} />
        </div>
      )}

      {!smallWindow && <Aside handleAddNewField={handleAddNewField} loading={loading} />}
    </Fragment>
  )
}
