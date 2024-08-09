import { ChacaLogo, Links, Menu, Theme } from "./components"
import clsx from "clsx"
import { useScreen } from "@modules/shared/hooks"
import { SCREEN_SIZES } from "@modules/app/constants"

import { Search } from "../../shared/components"

interface Props {
  handleChangeOpenAside(): void
  handleOpenSearch(): void
}

export default function Navbar({ handleChangeOpenAside, handleOpenSearch }: Props) {
  const { condition } = useScreen(SCREEN_SIZES.XL)

  const CLASS = clsx(
    "fixed top-0",
    "w-full",
    "z-50",
    "bg-white dark:bg-scale-3",
    "text-black dark:text-white",
    "xl:px-16 px-4",
    "flex items-center justify-between",
    "min-h-[65px] max-h-[65px]",
    "dark:border-b-[1px] dark:border-b-scale-7 border-b-2",
  )

  return (
    <nav className={CLASS}>
      <section className="flex items-center gap-x-3">
        {!condition && <Menu handleChange={handleChangeOpenAside} />}
        <ChacaLogo />
      </section>

      <section className="flex items-center gap-x-2 h-full">
        {condition && <Search handleClick={handleOpenSearch} full={false} />}
        <Theme />
        <Links />
      </section>
    </nav>
  )
}
