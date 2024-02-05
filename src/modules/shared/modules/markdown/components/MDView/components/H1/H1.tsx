interface Props {
  children: string
}

export default function H1({ children }: Props) {
  return <h1 className="text-4xl font-fontBold mb-2">{children}</h1>
}
