import { RouteContentLoader } from "@modules/shared/components/Loader"
import { ReactElement, Suspense } from "react"

export default function LazyRoute({ element, full }: { element: ReactElement , full?: boolean}) {
  return <Suspense fallback={<RouteContentLoader loading={true} full={full} />}>{element}</Suspense>
}
