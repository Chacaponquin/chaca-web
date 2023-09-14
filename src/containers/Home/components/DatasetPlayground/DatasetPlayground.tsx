import { useContext } from "react"
import { ArrowSvg, DatasetCard, DatasetsButtons } from "./components"
import { useDatasetPlayground } from "./hooks"
import { HomeContext } from "@containers/Home/context"

export default function DatasetPlayground({
  handleCreateSelectDataset,
  handleCreateAllDatasets,
  handleAddDataset,
}: {
  handleCreateSelectDataset: (i: number) => void
  handleCreateAllDatasets: () => void
  handleAddDataset: () => void
}) {
  const { points, handleClickPoint, showDatasets, selectFieldPoint, handleUpdateLines } =
    useDatasetPlayground()
  const { playgroundRef } = useContext(HomeContext)

  return (
    <section className="w-full">
      <DatasetsButtons
        handleAddDataset={handleAddDataset}
        handleCreateAllDatasets={handleCreateAllDatasets}
      />

      <div
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
          />
        ))}

        <ArrowSvg points={points} />
      </div>
    </section>
  )
}
