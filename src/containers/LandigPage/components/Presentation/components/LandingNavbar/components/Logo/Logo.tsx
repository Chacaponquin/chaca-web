import { APP_IMAGES } from "@modules/app/constants"

export default function Logo() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={APP_IMAGES.LOGO.image}
        alt={APP_IMAGES.LOGO.alt}
        className="object-cover w-[70px]"
      />

      <h1 className="font-fontBold text-white text-2xl uppercase esm:hidden">Chaca</h1>
    </div>
  )
}
