import { Dimension } from "../interfaces/dimension.interface"
import clsx from "clsx"

export function useFilters({ dimension }: { dimension: Dimension }) {
  const textClass = clsx({
    "text-sm": dimension === "small",
    "text-base": dimension === "normal",
    "text-lg": dimension === "large",
  })

  const paddingClass = clsx({
    "px-3": dimension === "small",
    "px-4": dimension === "normal",
    "px-5": dimension === "large",
  })

  return { textClass, paddingClass }
}
