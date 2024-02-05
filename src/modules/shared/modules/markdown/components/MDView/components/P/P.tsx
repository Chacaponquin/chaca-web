interface Props {
  children: string
}

export default function P({ children }: Props) {
  return <p className="text-scale-7 leading-7 text-base dark:text-scale-11">{children}</p>
}
