import { APP_IMAGES } from "@modules/app/constants"

export default function ImageSection() {
  return (
    <section className="flex-col items-center justify-center w-[450px] lg:flex hidden">
      <img
        src={APP_IMAGES.CONTACT.image}
        alt={APP_IMAGES.CONTACT.alt}
        className="object-contain w-full"
      />
    </section>
  )
}
