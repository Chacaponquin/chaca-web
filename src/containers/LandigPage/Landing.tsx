import { LandingNavbar, LinksSection } from "./components"

const Landing = () => {
  return (
    <main className="min-h-screen overflow-y-auto absolute top-0 overflow-x-hidden z-50 w-full">
      <LandingNavbar />

      <div className="w-full h-max flex flex-col items-center justify-center ">
        <LinksSection />
      </div>
    </main>
  )
}

export default Landing
