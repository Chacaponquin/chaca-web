interface Props {
  content: string
}

export default function MiniCode({ content }: Props) {
  return (
    <pre className="inline bg-[#f6f7f8] py-1 px-2 text-black border-[.1rem] border-scale-[#0000001a] font-fontCodeMedium rounded">
      {content}
    </pre>
  )
}
