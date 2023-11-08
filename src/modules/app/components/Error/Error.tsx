import { Layout } from "@containers/Layout/components"
import { ImageSection, TextSection } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import clsx from "clsx"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"

export default function Error() {
  const { DESCRIPTION } = useLanguage({
    DESCRIPTION: { en: "Something went wrong", es: "Algo salió mal" },
  })

  const { theme } = useTheme()

  const mainClass = clsx(
    "w-screen flex min-h-screen items-center justify-center px-4",
    {
      "bg-third-bg bg-cover bg-no-repeat": theme === THEME.LIGHT,
    },
    "dark:bg-scale-2",
  )

  const contentClass = clsx(
    "md:min-h-[600px] xl:justify-between shadow-lg rounded items-center",
    "xl:py-4 py-10 px-14 esm:px-10",
    "flex flex-col-reverse xl:flex-row",
    "xl:gap-10 gap-4",
    "dark:bg-scale-4 bg-white",
  )

  return (
    <Layout description={DESCRIPTION} title="Error">
      <main className={mainClass}>
        <div className={contentClass}>
          <TextSection />
          <ImageSection />
        </div>
      </main>
    </Layout>
  )
}
