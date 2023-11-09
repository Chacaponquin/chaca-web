import { Content, LandingNavbar } from "./components"

export default function Presentation() {
  return (
    <section className="md:min-h-screen w-full h-max md:mb-0 mb-20">
      <LandingNavbar />
      <Content />
    </section>
  )
}
