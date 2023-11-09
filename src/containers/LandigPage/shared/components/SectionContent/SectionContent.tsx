import clsx from "clsx"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function SectionContent({ children, className }: Props) {
  const sectionClass = clsx("max-w-[1200px] w-full", className)

  return (
    <div className="px-10 esm:px-7 w-full flex justify-center">
      <div className={sectionClass}>{children}</div>
    </div>
  )
}
