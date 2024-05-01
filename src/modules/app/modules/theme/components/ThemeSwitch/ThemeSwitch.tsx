import clsx from "clsx"
import { motion } from "framer-motion"
import { useTheme } from "../../hooks"
import { THEME } from "../../constants"
import { Dark, Light } from "@modules/app/modules/icon/components"
import { useMemo } from "react"

export default function ThemeSwitch() {
  const { theme } = useTheme()
  const isLight = useMemo(() => theme === THEME.LIGHT, [theme])

  const CONTAINER = clsx(
    "w-[75px] h-[32px]",
    "cursor-pointer",
    "px-2",
    "items-center flex",
    "rounded-sm",
    "bg-scale-12 dark:bg-scale-6",

    {
      "justify-start": isLight,
      "justify-end": !isLight,
    },
  )

  const CUBIC = clsx(
    "flex justify-center items-center",
    "rounded-sm",
    "w-[30px] h-[22px]",

    {
      "bg-purple-6 stroke-white": isLight,
      "bg-scale-3 stroke-white": !isLight,
    },
  )

  const ICON_SIZE = 14

  return (
    <div className={CONTAINER}>
      <motion.div
        className={CUBIC}
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
