import { ChacaFormProps } from "../../interfaces/chacaForm.interface"
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
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
    large: {
      width: { parent: 50, child: 15 },
      height: { parent: 25, child: 15 },
    },
  }

  const containerClass = clsx("rounded-full  flex items-center px-2", {
    "bg-gradient-to-tr from-principalColor to-secondColor": value,
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
      className={containerClass}
    >
      <motion.div
        layout
        className='bg-white rounded-full cursor-pointer'
        style={{
          width: `${DIMENSION_VALUES[dimension].width.child}px`,
          height: `${DIMENSION_VALUES[dimension].height.child}px`,
        }}
      ></motion.div>
    </motion.div>
  )
}
