import { ChacaFormProps } from "../../interfaces/form"
import { motion } from "framer-motion"
import clsx from "clsx"

export default function ChacaSwitchButton({
  onChange,
  value,
  dimension = "normal",
}: ChacaFormProps<boolean>) {
  const DIMENSION_VALUES = {
    normal: {
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
    small: {
      width: { parent: 45, child: 15 },
      height: { parent: 25, child: 15 },
    },
    large: {
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
  }

  const CONTAINER_CLASS = clsx("rounded-full flex items-center px-2 cursor-pointer", {
    "bg-gradient-to-tr from-purple-6 to-purple-7": value,
    "bg-slate-300": !value,
  })

  return (
    <motion.div
      onClick={() => {
        if (onChange) onChange(!value)
      }}
      style={{
        justifyContent: value ? "flex-end" : "flex-start",
        width: `${DIMENSION_VALUES[dimension].width.parent}px`,
        height: `${DIMENSION_VALUES[dimension].height.parent}px`,
      }}
      className={CONTAINER_CLASS}
    >
      <motion.div
        layout
        className="bg-white rounded-full"
        style={{
          width: `${DIMENSION_VALUES[dimension].width.child}px`,
          height: `${DIMENSION_VALUES[dimension].height.child}px`,
        }}
      ></motion.div>
    </motion.div>
  )
}
