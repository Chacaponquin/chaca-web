import { Logo } from "@modules/app/components"
import { APP_ROUTES } from "@modules/app/constants/app-routes"
import { Link } from "react-router-dom"

export default function ChacaLogo() {
  return (
    <Link to={APP_ROUTES.ROOT}>
      <div className="flex gap-x-4 items-center">
        <Logo size={45} />
        <p className="mb-0 text-lg font-fontMedium uppercase esm:hidden">CHACA DOCS</p>
      </div>
    </Link>
  )
}
