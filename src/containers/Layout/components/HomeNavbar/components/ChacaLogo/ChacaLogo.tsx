import { APP_IMAGES } from "@modules/app/constants"

export default function ChacaLogo() {
  return (
    <div className="flex gap-x-4 items-center">
      <div className="py-1">
        <img src={APP_IMAGES.LOGO.image} alt={APP_IMAGES.LOGO.alt} className="w-[35px]" />
      </div>

      <p className="mb-0 text-xl font-fontTitle uppercase esm:hidden">CHACA</p>
    </div>
  )
}
