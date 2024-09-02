interface Props {
  children: string
}

export default function H2({ children }: Props) {
  return (
    <h2 className="text-3xl esm:text-2xl mb-4 mt-10 font-fontMedium dark:text-white">{children}</h2>
  )
}
