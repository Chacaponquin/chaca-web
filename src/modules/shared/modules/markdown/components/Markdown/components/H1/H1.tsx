interface Props {
  children: string
}

export default function H1({ children }: Props) {
  return <h1 className="sm:text-3xl text-2xl font-fontMedium mb-5 dark:text-white">{children}</h1>
}
