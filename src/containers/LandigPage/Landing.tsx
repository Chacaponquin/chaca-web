import { Footer, LinksSection, Presentation } from "./components"

const Landing = () => {
  return (
    <main className="min-h-screen overflow-y-auto absolute top-0 overflow-x-hidden z-50 w-full">
      <Presentation />
      <LinksSection />
      <Footer />
    </main>
  )
}

export default Landing
