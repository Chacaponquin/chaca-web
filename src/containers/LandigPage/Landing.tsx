import { Adventages, Footer, LinksSection, Presentation } from "./components"

export default function Landing() {
  return (
    <main className="min-h-screen overflow-y-auto flex flex-col items-center overflow-x-hidden w-full bg-scale-2">
      <Presentation />
      <Adventages />
      <LinksSection />
      <Footer />
    </main>
  )
}
