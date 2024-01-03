import { Layout } from "@containers/Layout/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { HomeNavbar } from "./components"

interface Props {
  children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  const { HOME_DESCRIPTION } = useTranslation({
    HOME_DESCRIPTION: {
      en: "An interactive application so you can easily create your mock data to test or develop applications",
      es: "Una aplicación interactiva para que puedas crear fácilmente tu mock data para realizar tests o desarrollar aplicaciones",
    },
  })

  return (
    <Layout description={HOME_DESCRIPTION} title="Chaca | Home">
      <main className="flex flex-col w-full h-screen fixed top-0 left-0">
        <HomeNavbar />
        {children}
      </main>
    </Layout>
  )
}
