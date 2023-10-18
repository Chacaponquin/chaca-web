interface Props {
  className: string
  onClick: () => void
  text: string
}

export default function Option({ className, onClick, text }: Props) {
  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  )
}
