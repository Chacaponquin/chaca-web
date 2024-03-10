interface Props {
  children: string
}

export default function H1({ children }: Props) {
  return <h1 className="text-5xl esm:text-4xl font-fontBold mb-3">{children}</h1>
}
