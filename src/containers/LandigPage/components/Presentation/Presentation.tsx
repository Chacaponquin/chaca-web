import { Content, LandingNavbar } from "./components"

export default function Presentation() {
  return (
    <section className="relative bg-scale-9 h-screen w-full bg-no-repeat bg-cover">
      <LandingNavbar />
      <Content />
    </section>
  )
}
