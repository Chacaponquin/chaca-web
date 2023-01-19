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
          <LoaderContainer loading={loading} className='w-[150px] esm:w-[80px]' />
        </div>
      ) : (
        children
      )}
    </Fragment>
  )
}
