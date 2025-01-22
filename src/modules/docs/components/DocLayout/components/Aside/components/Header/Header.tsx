import { Logo } from "@modules/app/components"
import { APP_ROUTES } from "@modules/app/constants/app-routes"
import { X } from "@modules/app/modules/icon/components"
import { Link } from "react-router-dom"

interface Props {
  handleClose(): void
}

export default function Header({ handleClose }: Props) {
  return (
    <header className="flex items-center justify-between py-3 text-black dark:text-white">
      <Link to={APP_ROUTES.ROOT}>
        <div className="flex gap-x-4 items-center">
          <Logo size={50} />
          <h1 className="font-fontMedium text-lg uppercase overflow-hidden overflow-ellipsis whitespace-nowrap">
            Chaca Docs
          </h1>
        </div>
      </Link>

      <button onClick={handleClose} className="dark:fill-white fill-black">
        <X size={20} />
      </button>
    </header>
  )
}
