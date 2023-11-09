import { SectionContent } from "@containers/LandigPage/shared/components"
import { Cards, HeaderText } from "./components"
import { useAdventages } from "./hooks"

export default function Adventages() {
  const { CARDS } = useAdventages()

  return (
    <SectionContent className="flex flex-col w-full py-20">
      <HeaderText />
      <Cards cards={CARDS} />
    </SectionContent>
  )
}
