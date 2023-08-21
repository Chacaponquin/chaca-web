import { RouteContentLoader } from "@modules/shared/components/Loader"
import { ReactElement, Suspense } from "react"

export default function LazyRoute({ children, full }: { children: ReactElement; full?: boolean }) {
  return (
    <Suspense fallback={<RouteContentLoader loading={true} full={full} />}>{children}</Suspense>
  )
}
