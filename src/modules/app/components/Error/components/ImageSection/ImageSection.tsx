import { Image } from "@modules/app/components"
import { APP_IMAGES } from "@modules/app/constants/image"

export default function ImageSection() {
  return (
    <section>
      <Image
        image={APP_IMAGES.ERROR}
        className="w-[450px] object-cover esm:w-[350px] min-w-[270px]"
      />
    </section>
  )
}
