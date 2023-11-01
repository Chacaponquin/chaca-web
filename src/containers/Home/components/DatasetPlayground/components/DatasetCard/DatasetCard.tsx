import { Dataset } from "@modules/datasets/domain/tree"
import { ClickPointProps } from "../../interfaces/point.interface"
import { CardHeader, Field } from "./components"
import { useDatasetCard } from "./hooks"
import { motion } from "framer-motion"
import { useContext } from "react"
import { HomeContext } from "@containers/Home/context"
import clsx from "clsx"
import { useDatasets } from "@modules/datasets/hooks"
import { ChangeDatasetCardProps } from "../../interfaces/card.interface"

interface DatasetCardProps {
  handleCreateSelectDataset: (i: number) => void
  index: number
  positionX: number
  positionY: number
  handleClickPoint(p: ClickPointProps): void
  dataset: Dataset
  selectFieldPoint: null | string
  handleUpdateLines: () => void
  handleChangeDatasetCardPosition(props: ChangeDatasetCardProps): void
}

export default function DatasetCard({
  handleCreateSelectDataset,
  index,
  positionX,
  positionY,
  dataset,
  selectFieldPoint,
  handleUpdateLines,
  handleChangeDatasetCardPosition,
}: DatasetCardProps) {
  const { playgroundRef } = useContext(HomeContext)

  const {
    handleEditDataset,
    handleDeleteDataset,
    handleExportDataset,
    handleClickCard,
    onDrangEnd,
  } = useDatasetCard({
    handleCreateSelectDataset,
    index,
    handleUpdateLines,
    handleChangeDatasetCardPosition,
  })

  const { selectedDataset } = useDatasets()

  const CARD_CLASS = clsx(
    "bg-scale-4 absolute flex flex-col min-w-[380px] rounded-lg text-white stroke-white cursor-grab",
    { "outline outline-4 outline-purple-6": selectedDataset?.id === dataset.id },
  )

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={playgroundRef.current ? playgroundRef : undefined}
      onDragEnd={(_, info) => onDrangEnd(dataset.id, info)}
      className={CARD_CLASS}
      style={{
        left: `${positionX}px`,
        top: `${positionY}px`,
      }}
      id={dataset.id}
      onClick={handleClickCard}
    >
      <CardHeader
        handleDeleteDataset={handleDeleteDataset}
        handleEditDataset={handleEditDataset}
        handleExportDataset={handleExportDataset}
        name={dataset.name}
        limit={dataset.limit}
      />

      <div className="flex flex-col py-2">
        {dataset.nodes.map((field, i) => (
          <Field
            key={i}
            field={field}
            selectFieldPoint={selectFieldPoint}
            datasetHasKeys={dataset.hasKeyField()}
          />
        ))}
      </div>
    </motion.div>
  )
}
