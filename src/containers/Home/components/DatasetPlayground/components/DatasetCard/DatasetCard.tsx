import { Dataset } from "@modules/datasets/domain/tree"
import { ClickPointProps } from "../../interfaces/point.interface"
import { CardHeader, Field } from "./components"
import { useDatasetCard } from "./hooks"

interface DatasetCardProps {
  handleCreateSelectDataset: (i: number) => void
  index: number
  positionX: number
  positionY: number
  handleClickPoint(p: ClickPointProps): void
  dataset: Dataset
  selectFieldPoint: null | string
}

export default function DatasetCard({
  handleCreateSelectDataset,
  index,
  positionX,
  positionY,
  handleClickPoint,
  dataset,
  selectFieldPoint,
}: DatasetCardProps) {
  const {
    openConfig,
    handleEditDataset,
    handleDeleteDataset,
    handleExportDataset,
    handleInteractOpenConfig,
  } = useDatasetCard({ handleCreateSelectDataset, index })

  const CARD_CLASS =
    "bg-darkColor absolute flex flex-col w-[400px] rounded-md text-white stroke-white"

  return (
    <div
      className={CARD_CLASS}
      style={{
        left: `${positionX}px`,
        top: `${positionY}px`,
      }}
      id={dataset.id}
    >
      <CardHeader
        openConfig={openConfig}
        handleInteractOpenConfig={handleInteractOpenConfig}
        handleDeleteDataset={handleDeleteDataset}
        handleEditDataset={handleEditDataset}
        handleExportDataset={handleExportDataset}
        name={dataset.name}
        limit={dataset.limit}
      />

      <div className="flex flex-col py-2">
        {dataset.fields.map((field, i) => (
          <Field
            key={i}
            field={field}
            handleClickPoint={handleClickPoint}
            selectFieldPoint={selectFieldPoint}
          />
        ))}
      </div>
    </div>
  )
}
