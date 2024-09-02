import { Bars } from "@modules/app/modules/icon/components"

interface Props {
  handleChange(): void
}

export default function Menu({ handleChange }: Props) {
  return (
    <button onClick={handleChange} className="dark:fill-white">
      <Bars size={22} />
    </button>
  )
}
