import clsx from "clsx"

export default function Button() {
  const CLASS = clsx(
    "px-4 py-1.5",
    "text-lg",
    "dark:text-white text-black",
    "font-fontMedium",
    "bg-transparent",
    "dark:hover:bg-scale-5 hover:bg-scale-12",
    "rounded-sm",
  )

  return <button className={CLASS}>Menu</button>
}
