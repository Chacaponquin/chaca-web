import { Fragment } from "react"
import Loader from "../Loader/Loader"

interface Props {
  loading: boolean
  size: number
  children?: JSX.Element
  className?: string
}

const LoaderContainer = ({ loading, size, children = <></> }: Props) => {
  return <Fragment>{loading ? <Loader size={size} /> : children}</Fragment>
}

export default LoaderContainer
