import { Fragment } from "react"
import LoaderContainer from "../LoaderContainer/LoaderContainer"

export default function AppLoader({
  loading,
  children,
}: {
  loading: boolean
  children: JSX.Element
}) {
  return (
    <Fragment>
      {loading ? (
        <div className='w-screen overflow-hidden h-screen flex justify-center items-center'>
          <LoaderContainer size={100} loading={loading} />
        </div>
      ) : (
        children
      )}
    </Fragment>
  )
}
