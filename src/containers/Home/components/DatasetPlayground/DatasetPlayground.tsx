import { ArrowSvg, DatasetCard, DatasetsButtons, Playground } from "./components"
import { useDatasetPlayground } from "./hooks"

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

  return (
    <section className="w-full h-full flex flex-col dark:bg-scale-2 bg-scale-11">
      <DatasetsButtons
        handleAddDataset={handleAddDataset}
        handleCreateAllDatasets={handleCreateAllDatasets}
      />

      <Playground>
        {showDatasets.map((d, index) => (
          <DatasetCard
            handleCreateSelectDataset={handleCreateSelectDataset}
            index={index}
            key={d.dataset.id}
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
      </Playground>
    </section>
  )
}
