interface Props {
  children: React.ReactNode
}

export default function MiniCode({ children }: Props) {
  return (
    <code className="font-fontCodeMedium text-sm py-1 px-2 bg-scale-4 rounded">{children}</code>
  )
}
