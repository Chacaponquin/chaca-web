interface Props {
  content: string
}

export default function MiniCode({ content }: Props) {
  return (
    <pre className="inline bg-code-dark py-1 px-2 text-white font-fontCodeMedium rounded">
      {content}
    </pre>
  )
}
