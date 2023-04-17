import { Waveform } from "@uiball/loaders"

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
    <>
      {loading ? (
        <div className={className}>
          <Waveform color={filterColor()} size={size} />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default LoaderContainer
