import { DocSubSection } from "@modules/docs/domain/core/base"
import { Button } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"

interface Props {
  next: DocSubSection | null
  back: DocSubSection | null
}

export default function Footer({ back, next }: Props) {
  const { BACK, NEXT } = useTranslation({
    NEXT: { en: "Next page", es: "Próxima" },
    BACK: { en: "Previous page", es: "Anterior" },
  })

  return (
    <footer className="grid w-full grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-7 pt-8 border-t-[1px] border-scale-10 mt-8">
      {back ? (
        <Button text={BACK} title={back.title} url={back.url} direction="left" />
      ) : (
        <div></div>
      )}

      {next ? (
        <Button text={NEXT} title={next.title} url={next.url} direction="right" />
      ) : (
        <div></div>
      )}
    </footer>
  )
}
