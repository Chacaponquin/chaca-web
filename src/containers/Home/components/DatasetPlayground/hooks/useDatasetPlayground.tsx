import { useMemo, useState, useCallback, useEffect } from "react"
import { ArrowCoords, ClickPointProps, Point } from "../interfaces/point.interface"
import { useDatasets } from "@modules/datasets/hooks"
import { DatasetConnection } from "@modules/datasets/interfaces/dataset-connect"
import {
  getGroupedConnections,
  getPathData,
  pathify,
  getElement,
  groupArrows,
  reubicateArrows,
} from "../utils"
import { ConnectElement } from "../interfaces/connect.interface"
import { ChangeDatasetCardProps, ShowDataset } from "../interfaces/card.interface"

export default function useDatasetPlayground() {
  const { datasets, getDatasetConnections } = useDatasets()
  const [selectFieldPoint, setSelectFieldPoint] = useState<string | null>(null)
  const [points, setPoints] = useState<Array<Point>>([])

  const showDatasets: Array<ShowDataset> = useMemo(() => {
    return datasets.map((d) => ({ dataset: d, positionX: 0, positionY: 0 }))
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
    const connections: Array<ConnectElement> = getGroupedConnections({ elements: connectDatasets })
    const returnPoints = [] as Array<Point>
    const arrowCoords = [] as Array<ArrowCoords>

    for (const conn of connections) {
      conn.to.forEach((to) => {
        const coords = getPathData({ from: conn.from, to: to.rect })
        arrowCoords.push(coords)
      })
    }

    const groups = groupArrows(arrowCoords)

    reubicateArrows(groups)

    for (const arrow of arrowCoords) {
      const path = pathify({ paths: arrow.coords })
      const savePoint: Point = { path: path, rect: arrow.to }

      returnPoints.push(savePoint)
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

    connectDatasets.forEach((d) => {
      const el = getElement(d.from)

      if (el) {
        el.addEventListener("mousemove", handleCalcPoints)
      }
    })

    window.addEventListener("mousemove", handleCalcPoints)

    return () => {
      window.removeEventListener("resize", handleCalcPoints)
      window.removeEventListener("scroll", handleCalcPoints)

      connectDatasets.forEach((d) => {
        const el = getElement(d.from)

        if (el) {
          el.removeEventListener("mousemove", handleCalcPoints)
        }
      })
    }
  }, [handleCalcPoints])

  function handleUpdateLines() {
    handleCalcPoints()
  }

  function handleChangeDatasetCardPosition({ datasetId, x, y }: ChangeDatasetCardProps): void {
    console.log({ x, y, datasetId })
  }

  return {
    selectFieldPoint,
    connectDatasets,
    handleClickPoint,
    showDatasets,
    points,
    handleUpdateLines,
    handleChangeDatasetCardPosition,
  }
}
