interface Props {
  response: string
}

export default function ResponseVideo({ response }: Props) {
  return (
    <div className="flex w-full justify-center py-4 px-8">
      <video controls src={response} className="w-full max-w-[600px] rounded" />
    </div>
  )
}
