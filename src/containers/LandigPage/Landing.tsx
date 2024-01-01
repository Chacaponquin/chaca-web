import { Adventages, Footer, Sections, Presentation, LinksSection } from "./components"

export default function Landing() {
  return (
    <main className="min-h-screen overflow-y-auto flex flex-col items-center overflow-x-hidden w-full bg-scale-2">
      <Presentation />
      <Adventages />
      <Sections />
      <LinksSection />
      <Footer />
    </main>
  )
}
