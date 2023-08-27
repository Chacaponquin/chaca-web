import { APP_IMAGES } from "@modules/app/constants"

export default function ImageSection() {
  return (
    <section>
      <img
        src={APP_IMAGES.ERROR.image}
        alt={APP_IMAGES.ERROR.alt}
        className="md:w-[500px] w-[450px] object-cover esm:w-[350px] min-w-[270px]"
      />
    </section>
  )
}
