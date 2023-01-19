import { RouteContentLoader } from "@modules/shared/components/Loader"
import { ReactElement, Suspense } from "react"

export default function LazyRoute({ element }: { element: ReactElement }) {
  return (
    <Suspense fallback={<RouteContentLoader loading={true}>{<></>}</RouteContentLoader>}>
      {element}
    </Suspense>
  )
}
