import Loader from "../Loader/Loader"
import { Waveform } from "@uiball/loaders"

interface LoaderProps {
  loading: boolean
  size: number
  children?: JSX.Element
  color?: "principal" | "white"
}

const LoaderContainer = ({ loading, size, children = <></>, color = "principal" }: LoaderProps) => {
  function filterColor(): string {
    if (color === "principal") {
      return "#7d5fff"
    } else {
      return "#ffffff"
    }
  }

  return (
    <>
      {loading ? (
        <div>
          <Waveform color={filterColor()} size={size} />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default LoaderContainer
