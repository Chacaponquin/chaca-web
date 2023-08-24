import { APP_IMAGES } from "@modules/app/constants"
import { CurveBg } from "@modules/shared/components/Background"

export default function ImageSection() {
  return (
    <div className="h-full lg:flex items-center hidden">
      <div className="absolute top-0 left-0 h-screen -translate-x-[200px]">
        <CurveBg />
      </div>

      <img
        src={APP_IMAGES.SIGN_UP_IMAGE.image}
        alt={APP_IMAGES.SIGN_UP_IMAGE.alt}
        className="object-contain z-20 -translate-x-[50px] max-w-full"
      />
    </div>
  )
}
