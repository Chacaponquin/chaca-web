import clsx from "clsx"

interface Props {
  children: React.ReactNode
}

export default function Doc({ children }: Props) {
  const CLASS = clsx(
    "flex-col flex",
    "w-full max-w-[1000px] min-h-screen max-h-screen",
    "pt-[65px] pb-5 px-10 esm:px-6",
  )

  return <article className={CLASS}>{children}</article>
}
