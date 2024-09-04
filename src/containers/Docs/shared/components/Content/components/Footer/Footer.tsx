import { DocSubSection } from "@modules/docs/domain/core/base"
import { Button } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import clsx from "clsx"

interface Props {
  next: DocSubSection | null
  back: DocSubSection | null
}

export default function Footer({ back, next }: Props) {
  const { BACK, NEXT } = useTranslation({
    NEXT: { en: "Next page", es: "Próxima" },
    BACK: { en: "Previous page", es: "Anterior" },
  })

  const CLASS = clsx(
    "w-full",
    "grid grid-cols-1 md:grid-cols-2",
    "gap-y-3 gap-x-7",
    "border-t-[1px] border-scale-10/50",
    "mt-24",
    "pt-8 pb-16",
  )

  return (
    <footer className={CLASS}>
      {back ? (
        <Button text={BACK} title={back.title} url={back.redirect} direction="left" />
      ) : (
        <div></div>
      )}

      {next ? (
        <Button text={NEXT} title={next.title} url={next.redirect} direction="right" />
      ) : (
        <div></div>
      )}
    </footer>
  )
}
