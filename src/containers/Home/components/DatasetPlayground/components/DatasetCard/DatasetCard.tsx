import { Dataset } from "@modules/datasets/domain/tree"
import { ClickPointProps } from "../../interfaces/point.interface"
import { CardHeader, Field } from "./components"
import { useDatasetCard, usePress } from "./hooks"
import { motion } from "framer-motion"
import { useContext } from "react"
import { HomeContext } from "@containers/Home/context"
import clsx from "clsx"
import { useDatasetServices } from "@modules/datasets/services"

interface DatasetCardProps {
  handleCreateSelectDataset: (i: number) => void
  index: number
  positionX: number
  positionY: number
  handleClickPoint(p: ClickPointProps): void
  dataset: Dataset
  selectFieldPoint: null | string
  handleUpdateLines: () => void
}

export default function DatasetCard({
  handleCreateSelectDataset,
  index,
  positionX,
  positionY,
  dataset,
  selectFieldPoint,
  handleUpdateLines,
}: DatasetCardProps) {
  const { playgroundRef } = useContext(HomeContext)

  const {
    openConfig,
    handleEditDataset,
    handleDeleteDataset,
    handleExportDataset,
    handleInteractOpenConfig,
    handleClickCard,
  } = useDatasetCard({ handleCreateSelectDataset, index })

  const { onDrangEnd } = usePress({
    handleUpdateLines,
  })

  const { selectedDataset } = useDatasetServices()

  const CARD_CLASS = clsx(
    "bg-darkColor absolute flex flex-col min-w-[360px] rounded-lg text-white stroke-white cursor-grab",
    { "outline outline-4 outline-principalColor": selectedDataset?.id === dataset.id },
  )

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={playgroundRef.current ? playgroundRef : undefined}
      onDragEnd={onDrangEnd}
      className={CARD_CLASS}
      style={{
        left: `${positionX}px`,
        top: `${positionY}px`,
      }}
      id={dataset.id}
      onClick={handleClickCard}
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
