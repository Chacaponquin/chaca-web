import { useMemo, useState } from "react"
import { ClickPointProps } from "../interfaces/point.interface"
import { useDatasetServices } from "@modules/datasets/services"
import { Dataset } from "@modules/datasets/domain/tree"

interface ConnectDataset {
  from: string
  connectWith: Array<string>
}

interface ShowDataset {
  dataset: Dataset
  positionX: number
  positionY: number
}

export default function useDatasetPlayground() {
  const { datasets } = useDatasetServices()
  const [selectFieldPoint, setSelectFieldPoint] = useState<string | null>(null)

  const showDatasets: Array<ShowDataset> = useMemo(() => {
    const show = [] as Array<ShowDataset>

    let x = 50
    let y = 100
    for (let i = 0; i < datasets.length; i++) {
      show.push({ dataset: datasets[i], positionX: x, positionY: y })
      x += 500
      y += 100
    }

    return show
  }, [datasets])

  const connectDatasets: Array<ConnectDataset> = useMemo(() => {}, [datasets])

  function handleClickPoint({ event, fieldId }: ClickPointProps): void {
    const rect = event.currentTarget.getClientRects().item(0)

    if (rect) {
      setSelectFieldPoint(fieldId)

      console.log(rect)
    }
  }

  return { selectFieldPoint, connectDatasets, handleClickPoint, showDatasets }
}
