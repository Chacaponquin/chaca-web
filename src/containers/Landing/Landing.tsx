import { Layout } from "@containers/Layout/components"
import { Adventages, Footer, Sections, Presentation, LinksSection } from "./components"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function Landing() {
  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: {
      en: "The best web site to create mock data and schemas for your applications",
      es: "La mejor herramienta online para crear mock data y esquemas para tus aplicaciones",
    },
  })

  return (
    <Layout title="Chaca" description={DESCRIPTION}>
      <main className="min-h-screen overflow-y-auto flex flex-col items-center overflow-x-hidden w-full bg-scale-2">
        <Presentation />
        <Adventages />
        <Sections />
        <LinksSection />
        <Footer />
      </main>
    </Layout>
  )
}
