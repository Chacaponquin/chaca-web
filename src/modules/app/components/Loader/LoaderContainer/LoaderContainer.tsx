import { Fragment } from "react"
import Loader from "../Loader/Loader"

interface LoaderProps {
  loading: boolean
  size: number
  children?: JSX.Element
  className?: string
}

const LoaderContainer = ({ loading, size, children = <></> }: LoaderProps) => {
  return <Fragment>{loading ? <Loader size={size} /> : children}</Fragment>
}

export default LoaderContainer
