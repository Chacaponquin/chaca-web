import { Layout } from "@containers/Layout/components"
import { useTranslation } from "@modules/app/modules/language/hooks"
import { Buttons, HeaderText, Message } from "./components"

export default function Error404() {
  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: { en: "Page not found", es: "Página no encontrada" },
  })

  return (
    <Layout description={DESCRIPTION} title="Not found">
      <main className="flex bg-white dark:bg-scale-3 items-center w-full h-screen justify-center flex-col">
        <div className="flex flex-col items-center max-w-5xl px-4">
          <HeaderText />

          <div className="flex flex-col items-center -translate-y-16 esm:-translate-y-12">
            <Message />
            <Buttons />
          </div>
        </div>
      </main>
    </Layout>
  )
}
