interface Props {
  children: string
}

export default function Pre({ children }: Props) {
  return <pre className="mt-2 mb-4">{children}</pre>
}
