interface Props {
  name: string
  message: string
}

export default function DeleteForm({ name, message }: Props) {
  return (
    <p className="text-lg">
      {message} <b className="font-fontMedium font-normal dark:text-white">{name}</b>?
    </p>
  )
}
