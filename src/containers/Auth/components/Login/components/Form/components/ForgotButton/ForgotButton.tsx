import { APP_ROUTES } from "@modules/app/constants"
import { Link } from "react-router-dom"

export default function ForgotButton({ className, text }: { className: string; text: string }) {
  return (
    <Link
      to={APP_ROUTES.AUTH_ROUTES.FORGOT_PASSWORD}
      className={className + " bg-slate-200 text-black"}
    >
      {text}
    </Link>
  )
}
