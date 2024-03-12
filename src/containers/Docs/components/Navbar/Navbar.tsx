import { ThemeSwitch } from "@modules/app/modules/theme/components"
import { ChacaLogo, Menu } from "./components"
import clsx from "clsx"
import { useScreen } from "@modules/shared/hooks"
import { SCREEN_SIZES } from "@modules/app/constants"

interface Props {
  handleChangeOpenAside(): void
}

export default function Navbar({ handleChangeOpenAside }: Props) {
  const { bigScreen } = useScreen(SCREEN_SIZES.XL)

  const CLASS = clsx(
    "fixed top-0",
    "w-full",
    "z-50",
    "bg-white dark:bg-scale-3",
    "text-black dark:text-white",
    "px-6 esm:px-4",
    "flex items-center justify-between",
    "min-h-[65px] max-h-[65px]",
    "dark:border-b-[1px] dark:border-b-scale-7 border-b-2",
  )

  return (
    <nav className={CLASS}>
      <section className="flex items-center gap-x-3">
        {!bigScreen && <Menu handleChange={handleChangeOpenAside} />}
        <ChacaLogo />
      </section>

      <section className="flex items-center gap-x-6 h-full">
        <ThemeSwitch />
      </section>
    </nav>
  )
}
