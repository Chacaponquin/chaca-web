import { Loader } from "@modules/app/components"
import { useConfig } from "@modules/config/hooks"
import { useSchemas } from "@modules/schemas/hooks"
import { Fragment } from "react"

export default function ContentLoader() {
  const { loading: schemasLoading } = useSchemas()
  const { loading: configLoading } = useConfig()

  const loading = schemasLoading || configLoading

  return (
    <Fragment>
      {loading && (
        <div className="w-screen h-screen fixed bg-scale-5 top-0 left-0 z-[999] flex justify-center items-center overflow-hidden">
          <div className="px-10 py-10 w-full h-full flex flex-col items-center bg-white dark:bg-scale-3 justify-center overflow-hidden gap-20">
            <Loader size={200} />
          </div>
        </div>
      )}
    </Fragment>
  )
}
