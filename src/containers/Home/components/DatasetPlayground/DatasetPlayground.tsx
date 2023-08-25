import { ArrowSvg, DatasetCard } from "./components"
import { useDatasetPlayground } from "./hooks"

export default function DatasetPlayground({
  handleCreateSelectDataset,
}: {
  handleCreateSelectDataset: (i: number) => void
}) {
  const { connectDatasets, handleClickPoint, showDatasets, selectFieldPoint } =
    useDatasetPlayground()

  return (
    <section className="relative w-full h-full items-center bg-grayColor">
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
        />
      ))}

      <ArrowSvg />
    </section>
  )
}
