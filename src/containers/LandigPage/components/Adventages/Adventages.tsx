import { Cards, HeaderText } from "./components"
import { useAdventages } from "./hooks"

export default function Adventages() {
  const { CARDS } = useAdventages()

  return (
    <div className="flex flex-col w-full max-w-[1200px] py-7">
      <HeaderText />
      <Cards cards={CARDS} />
    </div>
  )
}
