import Loader from "./Loader"

interface LoaderProps {
  loading: boolean
  className: string
  children?: JSX.Element
}

const LoaderContainer = ({ loading, className, children = <></> }: LoaderProps) => {
  return (
    <>
      {loading ? (
        <div className={className}>
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default LoaderContainer
