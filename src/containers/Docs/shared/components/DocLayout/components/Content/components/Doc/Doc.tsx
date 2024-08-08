import { Location } from "./components"
import clsx from "clsx"

interface Props {
  location: string[]
  children: React.ReactNode
}

export default function Doc({ location, children }: Props) {
  const CLASS = clsx(
    "flex-col flex",
    "w-full min-h-screen max-h-screen",
    "pt-[65px] pb-5 px-10 esm:px-6",
    "overflow-y-auto",
  )

  return (
    <article className={CLASS}>
      <Location location={location} />
      {children}
    </article>
  )
}
