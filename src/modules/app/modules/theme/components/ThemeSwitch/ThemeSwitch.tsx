import clsx from "clsx"
import { motion } from "framer-motion"
import { useThemeServices } from "../../services"
import { THEME } from "../../constants/THEME"
import { Dark, Light } from "@modules/app/modules/icon/components"
import { useMemo } from "react"

export default function ThemeSwitch() {
  const { theme, handleChangeTheme } = useThemeServices()
  const isLight = useMemo(() => theme === THEME.LIGHT, [theme])

  function handleToggleSwitch() {
    if (isLight) {
      handleChangeTheme(THEME.DARK)
    } else {
      handleChangeTheme(THEME.LIGHT)
    }
  }

  const containerClass = clsx(
    "esm:w-[90px] w-[90px] h-[35px] items-center bg-grayColor dark:bg-white/20 flex px-4 rounded-sm cursor-pointer",
    {
      "justify-start": isLight,
      "justify-end": !isLight,
    },
  )

  const cubicClass = clsx(
    "rounded-sm esm:w-[30px] w-[35px] h-[25px] flex justify-center items-center",
    {
      "bg-principalColor stroke-white": isLight,
      "bg-darkColor stroke-white": !isLight,
    },
  )

  const ICON_SIZE = 15

  return (
    <div className={containerClass} onClick={handleToggleSwitch}>
      <motion.div
        className={cubicClass}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        {isLight ? <Light size={ICON_SIZE} /> : <Dark size={ICON_SIZE} />}
      </motion.div>
    </div>
  )
}
