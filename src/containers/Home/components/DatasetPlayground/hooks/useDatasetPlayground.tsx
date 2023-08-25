import { useMemo, useState, useCallback, useEffect } from "react"
import { ClickPointProps, Point } from "../interfaces/point.interface"
import { useDatasetServices } from "@modules/datasets/services"
import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetConnection } from "@modules/datasets/interfaces/dataset_connect.interface"
import { getGroupedConnections, getPathData, pathify } from "../utils"

interface ShowDataset {
  dataset: Dataset
  positionX: number
  positionY: number
}

export default function useDatasetPlayground() {
  const { datasets, getDatasetConnections } = useDatasetServices()
  const [selectFieldPoint, setSelectFieldPoint] = useState<string | null>(null)
  const [points, setPoints] = useState<Array<Point>>([])

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

  const connectDatasets: Array<DatasetConnection> = useMemo(() => {
    let allConnections = [] as Array<DatasetConnection>

    datasets.forEach((d) => {
      const conn = getDatasetConnections({ dataset: d })
      allConnections = [...allConnections, ...conn]
    })

    return allConnections
  }, [datasets])

  const handleCalcPoints = useCallback(() => {
    const connections = getGroupedConnections({ elements: connectDatasets })
    const returnPoints = [] as Array<Point>

    for (const conn of connections) {
      conn.to.forEach((to) => {
        const coords = getPathData({ from: conn.from, to: to.rect })
        const path = pathify({ paths: coords })

        const savePoint: Point = { path: path, rect: to.rect }

        returnPoints.push(savePoint)
      })
    }

    setPoints(returnPoints)
  }, [connectDatasets])

  function handleClickPoint({ event, fieldId }: ClickPointProps): void {
    const rect = event.currentTarget.getClientRects().item(0)

    if (rect) {
      setSelectFieldPoint(fieldId)
    }
  }

  useEffect(() => {
    handleCalcPoints()
  }, [connectDatasets, handleCalcPoints])

  useEffect(() => {
    window.addEventListener("resize", handleCalcPoints, { passive: true })
    window.addEventListener("scroll", handleCalcPoints, { passive: true })

    return () => {
      window.removeEventListener("resize", handleCalcPoints)
      window.removeEventListener("scroll", handleCalcPoints)
    }
  }, [handleCalcPoints])

  return { selectFieldPoint, connectDatasets, handleClickPoint, showDatasets, points }
}
