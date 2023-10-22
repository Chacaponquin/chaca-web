import { Layout } from "@containers/Layout/components"
import { ImageSection, TextSection } from "./components"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function Error() {
  const { DESCRIPTION } = useLanguage({
    DESCRIPTION: { en: "Something went wrong", es: "Algo salió mal" },
  })

  return (
    <Layout description={DESCRIPTION} title="Error">
      <main className="w-screen flex h-screen items-center justify-center bg-third-bg bg-cover bg-no-repeat px-4">
        <div className="md:min-h-[600px] flex flex-col-reverse xl:flex-row xl:gap-10 gap-4 xl:justify-between shadow-lg rounded bg-white xl:py-4 py-10 px-14 esm:px-10 items-center">
          <TextSection />
          <ImageSection />
        </div>
      </main>
    </Layout>
  )
}
