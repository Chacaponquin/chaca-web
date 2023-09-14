import { APP_IMAGES, APP_ROUTES } from "@modules/app/constants"
import { Link } from "react-router-dom"

export default function ChacaLogo() {
  return (
    <Link to={APP_ROUTES.ROOT}>
      <div className="flex gap-x-4 items-center">
        <div className="py-1">
          <img src={APP_IMAGES.LOGO.image} alt={APP_IMAGES.LOGO.alt} className="w-[35px]" />
        </div>

        <p className="mb-0 text-xl font-fontBold uppercase esm:hidden">CHACA</p>
      </div>
    </Link>
  )
}
