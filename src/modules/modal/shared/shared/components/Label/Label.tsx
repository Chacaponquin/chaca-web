interface Props {
  text: string
  info?: React.ReactNode
}

export default function Label({ text, info }: Props) {
  return (
    <div className="flex items-center gap-x-2">
      <label className="mb-0 text-base whitespace-nowrap font-fontMedium dark:text-scale-11">
        {text}:
      </label>

      {info}
    </div>
  )
}
