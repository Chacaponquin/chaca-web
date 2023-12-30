import { useMemo } from "react"
import { useDatasets } from "@modules/datasets/hooks"
import { ShowDataset } from "../interfaces/card.interface"

export default function useDatasetPlayground() {
  const { datasets } = useDatasets()

  const showDatasets: Array<ShowDataset> = useMemo(() => {
    return datasets.map((d) => ({ dataset: d, positionX: 0, positionY: 0 }))
  }, [datasets])

  return {
    showDatasets,
  }
}
