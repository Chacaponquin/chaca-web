interface Props {
  elementName: string
  message: string
}

export default function DeleteForm({ elementName, message }: Props) {
  return (
    <div className="flex w-full flex-col">
      <p className="text-lg">
        {message} <b className="font-fontMedium font-normal dark:text-white">{elementName}</b>?
      </p>
    </div>
  )
}
