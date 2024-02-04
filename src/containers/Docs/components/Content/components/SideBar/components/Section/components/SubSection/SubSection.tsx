import clsx from "clsx"

interface Props {
  title: string
  handleChangeSelectedDoc(): void
  selected: boolean
}

export default function SubSection({ title, handleChangeSelectedDoc }: Props) {
  const BUTTON_CLASS = clsx()

  return (
    <li>
      <button className={BUTTON_CLASS} onClick={handleChangeSelectedDoc}>
        {title}
      </button>
    </li>
  )
}
