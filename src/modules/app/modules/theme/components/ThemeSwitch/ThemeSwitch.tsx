import clsx from "clsx"
import { motion } from "framer-motion"
import { useThemeServices } from "../../services"
import { THEME } from "../../constants/THEME"
import { Dark, Light } from "@modules/app/modules/icon/components"

export default function ThemeSwitch() {
  const { theme, handleChangeTheme } = useThemeServices()
  const isLight = theme === THEME.LIGHT

  function handleToggleSwitch() {
    if (isLight) {
      handleChangeTheme(THEME.DARK)
    } else {
      handleChangeTheme(THEME.LIGHT)
    }
  }

  const containerClass = clsx(
    "esm:w-[80px] w-[100px] h-[35px] items-center bg-grayColor dark:bg-white/20 flex px-4 rounded-sm cursor-pointer",
    {
      "justify-start": isLight,
      "justify-end": !isLight,
    },
  )

  const cubicClass = clsx(
    "rounded-sm esm:w-[30px] w-[40px] h-[25px] flex justify-center items-center",
    {
      "bg-principalColor stroke-white": isLight,
      "bg-darkColor stroke-white": !isLight,
    },
  )

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
        {isLight ? <Light size={16} /> : <Dark size={16} />}
      </motion.div>
    </div>
  )
}
