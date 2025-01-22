import { APP_ROUTES } from "@modules/app/constants/app-routes"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Button } from "./components"

export default function Buttons() {
  const { REPORT_PROBLEM_TEXT, RETURN_HOME } = useTranslation({
    REPORT_PROBLEM_TEXT: { en: "Report Problem", es: "Reportar Problema" },
    RETURN_HOME: { en: "Return Home", es: "Volver" },
  })

  return (
    <div className="flex gap-7 mt-8 esm:flex-col items-center esm:gap-3">
      <Button route={APP_ROUTES.HOME} text={RETURN_HOME} type="link" />
      <Button text={REPORT_PROBLEM_TEXT} route={APP_ROUTES.CONTACT_US} type="cancel" />
    </div>
  )
}
