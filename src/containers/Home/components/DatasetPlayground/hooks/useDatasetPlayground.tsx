import { useMemo, useState, useCallback, useEffect } from "react"
import { ClickPointProps, Point } from "../interfaces/point.interface"
import { useDatasetServices } from "@modules/datasets/services"
import { Dataset } from "@modules/datasets/domain/tree"
import { DatasetConnection } from "@modules/datasets/interfaces/dataset_connect.interface"
import { getGroupedConnections, getPathData, pathify, getElement } from "../utils"
import { ChangePositionProps } from "../interfaces/position.interface"
import { ConnectElement } from "../interfaces/connect.interface"

interface ShowDataset {
  dataset: Dataset
  positionX: number
  positionY: number
}

export default function useDatasetPlayground() {
  const { datasets, getDatasetConnections } = useDatasetServices()
  const [selectFieldPoint, setSelectFieldPoint] = useState<string | null>(null)
  const [points, setPoints] = useState<Array<Point>>([])
  const [showDatasets, setShowDatasets] = useState<Array<ShowDataset>>([])

  useEffect(() => {
    const show = [] as Array<ShowDataset>

    let x = 50
    let y = 100
    for (const dat of datasets) {
      show.push({ dataset: dat, positionX: x, positionY: y })
      x += 500
      y += 100
    }

    setShowDatasets(show)
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

  function handleChangeDatasetPosition({ x, datasetId, y }: ChangePositionProps) {
    setShowDatasets((prev) => {
      return prev.map((d) => {
        if (d.dataset.id === datasetId) {
          return { dataset: d.dataset, positionX: x, positionY: y }
        } else {
          return d
        }
      })
    })
  }

  function handleUpdateLines() {
    handleCalcPoints()
  }

  return {
    selectFieldPoint,
    connectDatasets,
    handleClickPoint,
    showDatasets,
    points,
    handleChangeDatasetPosition,
    handleUpdateLines,
  }
}
