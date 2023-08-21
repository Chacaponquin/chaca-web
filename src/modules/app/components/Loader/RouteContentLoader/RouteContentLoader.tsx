import { Fragment, ReactNode } from "react"
import LoaderContainer from "../LoaderContainer/LoaderContainer"
import clsx from "clsx"

export default function RouteContentLoader({
  loading,
  children = <></>,
  full = false,
}: {
  loading: boolean
  children?: ReactNode
  full?: boolean
}) {
  const divClass = clsx("flex w-full justify-center items-center ", {
    "absolute top-0 left-0 h-screen": full,
    "h-full": !full,
  })

  return (
    <Fragment>
      {loading ? (
        <div className={divClass}>
          <LoaderContainer loading={loading} size={100} />
        </div>
      ) : (
        children
      )}
    </Fragment>
  )
}
