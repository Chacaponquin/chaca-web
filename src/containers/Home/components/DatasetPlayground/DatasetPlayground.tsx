import { useContext } from "react"
import { ArrowSvg, DatasetCard, DatasetsButtons } from "./components"
import { useDatasetPlayground } from "./hooks"
import { HomeContext } from "@containers/Home/context"
import { motion } from "framer-motion"

interface Props {
  handleCreateSelectDataset: (i: number) => void
  handleCreateAllDatasets: () => void
  handleAddDataset: () => void
}

export default function DatasetPlayground({
  handleCreateSelectDataset,
  handleCreateAllDatasets,
  handleAddDataset,
}: Props) {
  const {
    points,
    handleClickPoint,
    showDatasets,
    selectFieldPoint,
    handleUpdateLines,
    handleChangeDatasetCardPosition,
  } = useDatasetPlayground()
  const { playgroundRef } = useContext(HomeContext)

  return (
    <section className="w-full h-full flex flex-col">
      <DatasetsButtons
        handleAddDataset={handleAddDataset}
        handleCreateAllDatasets={handleCreateAllDatasets}
      />

      <motion.div
        className="relative w-full h-full bg-grayColor dark:bg-darkColorExtraLight"
        ref={playgroundRef}
        id="dataset-playground"
      >
        {showDatasets.map((d, index) => (
          <DatasetCard
            handleCreateSelectDataset={handleCreateSelectDataset}
            index={index}
            key={index}
            positionX={d.positionX}
            positionY={d.positionY}
            handleClickPoint={handleClickPoint}
            dataset={d.dataset}
            selectFieldPoint={selectFieldPoint}
            handleUpdateLines={handleUpdateLines}
            handleChangeDatasetCardPosition={handleChangeDatasetCardPosition}
          />
        ))}

        <ArrowSvg points={points} />
      </motion.div>
    </section>
  )
}
