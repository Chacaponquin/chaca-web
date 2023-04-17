import { ChacaSimpleButton } from "@form/components"
import { APP_IMAGES } from "@modules/shared/constant"
import { useLanguage } from "@modules/shared/modules/app/hooks"
import { APP_ROUTES } from "@modules/shared/routes"
import { Link } from "react-router-dom"

export default function EmptyModelsMessage() {
  const { MESSAGE, CREATE_DATASET_MESSAGE } = useLanguage({
    MESSAGE: { en: "You don't have any models", es: "No tienes modelos" },
    CREATE_DATASET_MESSAGE: { en: "Create First Dataset", es: "Crea tu primer Dataset" },
  })

  return (
    <div className='flex flex-col items-center pt-28 w-full bg-second-bg bg-no-repeat h-screen bg-cover'>
      <img className='w-[450px]' src={APP_IMAGES.EMPTY.image} alt={APP_IMAGES.EMPTY.alt} />
      <h1 className='text-4xl my-4 font-fontBold'>{MESSAGE}</h1>
      <Link to={APP_ROUTES.HOME}>
        <ChacaSimpleButton text={CREATE_DATASET_MESSAGE} color='primary' size='large' />
      </Link>
    </div>
  )
}
