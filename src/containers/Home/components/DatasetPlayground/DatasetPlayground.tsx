import { useContext } from "react"
import { ArrowSvg, DatasetCard } from "./components"
import { useDatasetPlayground } from "./hooks"
import { HomeContext } from "@containers/Home/context"

export default function DatasetPlayground({
  handleCreateSelectDataset,
}: {
  handleCreateSelectDataset: (i: number) => void
}) {
  const { points, handleClickPoint, showDatasets, selectFieldPoint, handleUpdateLines } =
    useDatasetPlayground()
  const { playgroundRef } = useContext(HomeContext)

  return (
    <section
      className="relative w-full h-full bg-grayColor dark:bg-darkColorExtraLight"
      ref={playgroundRef}
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
    </section>
  )
}
