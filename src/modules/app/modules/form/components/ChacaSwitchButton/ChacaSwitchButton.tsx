import { ChacaFormProps } from "../../domain"
import { motion } from "framer-motion"
import clsx from "clsx"

export default function ChacaSwitchButton({ onChange, value, size }: ChacaFormProps<boolean>) {
  const DIMENSION_VALUES = {
    base: {
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
    sm: {
      width: { parent: 45, child: 15 },
      height: { parent: 25, child: 15 },
    },
    lg: {
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
    xl: {
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
  }

  const CONTAINER_CLASS = clsx("rounded-full", "cursor-pointer", "px-2", "flex items-center", {
    "bg-gradient-to-tr from-purple-6 to-purple-7": value,
    "bg-slate-300": !value,
  })

  return (
    <motion.div
      onClick={() => onChange(!value)}
      style={{
        justifyContent: value ? "flex-end" : "flex-start",
        width: `${DIMENSION_VALUES[size].width.parent}px`,
        height: `${DIMENSION_VALUES[size].height.parent}px`,
      }}
      className={CONTAINER_CLASS}
    >
      <motion.div
        layout
        className="bg-white rounded-full"
        style={{
          width: `${DIMENSION_VALUES[size].width.child}px`,
          height: `${DIMENSION_VALUES[size].height.child}px`,
        }}
      ></motion.div>
    </motion.div>
  )
}
