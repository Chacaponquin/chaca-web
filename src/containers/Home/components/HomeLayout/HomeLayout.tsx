import { Layout } from "@containers/Layout/components"
import { useLanguage } from "@modules/app/modules/language/hooks"
import { HomeNavbar } from "./components"

interface Props {
  children: React.ReactNode
}

export default function HomeLayout({ children }: Props) {
  const { HOME_DESCRIPTION } = useLanguage({
    HOME_DESCRIPTION: {
      en: "An interactive application so you can easily create your mock data to test or develop applications",
      es: "Una aplicación interactiva para que puedas crear fácilmente tu mock data para realizar tests o desarrollar aplicaciones",
    },
  })

  return (
    <Layout description={HOME_DESCRIPTION} title="Chaca | Home">
      <main className="flex flex-col w-full h-screen">
        <HomeNavbar />
        {children}
      </main>
    </Layout>
  )
}
