import clsx from "clsx"

export default function Sections() {
  const CLASS = clsx(
    "xl:flex flex-col hidden",
    "h-screen max-h-screen w-full max-w-[320px]",
    "pl-4 pr-16 pb-2 pt-[75px]",
    "overflow-auto",
  )

  return <aside className={CLASS}></aside>
}
