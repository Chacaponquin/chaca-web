interface Props {
  children: React.ReactNode
}

export default function P({ children }: Props) {
  return <p className="leading-7 text-base dark:text-scale-12">{children}</p>
}
