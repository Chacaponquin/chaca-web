import { Waveform } from "@uiball/loaders"
import { Fragment } from "react"

interface LoaderProps {
  loading: boolean
  size: number
  children?: JSX.Element
  color?: "principal" | "white"
  className?: string
}

const LoaderContainer = ({
  loading,
  size,
  children = <></>,
  color = "principal",
  className = "",
}: LoaderProps) => {
  function filterColor(): string {
    if (color === "principal") {
      return "#7d5fff"
    } else {
      return "#ffffff"
    }
  }

  return (
    <Fragment>
      {loading ? (
        <div className={className} id="loader">
          <Waveform color={filterColor()} size={size} />
        </div>
      ) : (
        children
      )}
    </Fragment>
  )
}

export default LoaderContainer
