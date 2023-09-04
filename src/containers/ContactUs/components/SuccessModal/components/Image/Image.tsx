import { APP_IMAGES } from "@modules/app/constants"

export default function Image() {
  return (
    <img
      src={APP_IMAGES.SUCCESS.image}
      alt={APP_IMAGES.SUCCESS.alt}
      className="object-contain w-[300px] mb-3"
    />
  )
}
