import { LoaderContainer } from "@modules/shared/components/Loader"
import { APP_IMAGES } from "@modules/shared/constant"
import { Fragment } from "react"
import clsx from "clsx"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import { ExampleCode } from "@modules/shared/modules/markdown/components"

export default function RequestResult({
  loading,
  result,
}: {
  loading: boolean
  result: string | undefined
}) {
  const divClass = clsx("flex items-center justify-center rounded w-full min-w-[450px] flex-col", {
    "border-2 border-principalColor py-6": result === undefined || loading,
  })

  const { RESULT_TEXT, MESSAGE } = useLanguage({
    RESULT_TEXT: { en: "Result", es: "Resultado" },
    MESSAGE: {
      en: "Enter the parameters and click send to get a response",
      es: "Inserta los parámetros y presiona enviar para obtener un resultado",
    },
  })

  return (
    <div className='flex flex-col'>
      <h1 className='font-fontBold text-lg '>{RESULT_TEXT}</h1>

      <div className={divClass}>
        {result === undefined && !loading && (
          <div className='flex flex-col justify-center items-center'>
            <img
              src={APP_IMAGES.WAIT_REQUEST.image}
              alt={APP_IMAGES.WAIT_REQUEST.alt}
              className='object-contain w-[250px]'
            />
            <h1 className='text-base mt-4'>{MESSAGE}</h1>
          </div>
        )}
        <LoaderContainer size={30} loading={loading}>
          {result ? (
            <pre className='w-full bg-darkColor rounded-sm overflow-x-auto'>
              <ExampleCode code={result} language='json' />
            </pre>
          ) : (
            <Fragment></Fragment>
          )}
        </LoaderContainer>
      </div>
    </div>
  )
}
