import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { ChacaLogo } from "./components"

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-scale-3 text-black dark:text-white flex items-center px-6 esm:px-4 justify-between min-h-[65px] max-h-[65px] dark:border-b-[1px] dark:border-b-scale-7 border-b-2">
      <section className="flex items-center">
        <ChacaLogo />
      </section>

      <section className="flex items-center gap-x-6 h-full">
        <ThemeSwitch />
      </section>
    </nav>
  )
}
