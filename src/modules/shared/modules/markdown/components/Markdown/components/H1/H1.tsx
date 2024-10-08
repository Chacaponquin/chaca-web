interface Props {
  children: string
  id: string
}

export default function H1({ children, id }: Props) {
  return (
    <h1 id={id} className="text-4xl font-fontTitleMedium mb-5 dark:text-white">
      {children}
    </h1>
  )
}
