interface Props {
  children: string
}

export default function H2({ children }: Props) {
  return <h2 className="text-2xl mb-2.5 mt-12 font-fontMedium dark:text-white">{children}</h2>
}
