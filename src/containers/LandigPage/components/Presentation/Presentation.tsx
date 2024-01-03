import { Content, LandingNavbar } from "./components"

export default function Presentation() {
  return (
    <section className="h-screen w-full md:mb-0 mb-20 flex flex-col justify-center min-h-[700px]">
      <LandingNavbar />
      <Content />
    </section>
  )
}
