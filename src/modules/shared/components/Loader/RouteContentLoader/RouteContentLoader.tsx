import { Fragment, ReactNode } from "react"
import LoaderContainer from "../LoaderContainer/LoaderContainer"

export default function RouteContentLoader({
  loading,
  children,
}: {
  loading: boolean
  children: ReactNode
}) {
  return (
    <Fragment>
      {loading ? (
        <div className='flex w-full h-full justify-center items-center'>
          <LoaderContainer loading={loading} size={100} />
        </div>
      ) : (
        children
      )}
    </Fragment>
  )
}
