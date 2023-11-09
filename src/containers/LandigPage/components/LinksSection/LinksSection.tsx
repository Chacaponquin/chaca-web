import { SectionContent } from "@containers/LandigPage/shared/components"
import { ImageSection, TextSection } from "./components"

export default function LinksSection() {
  return (
    <SectionContent className="grid py-20 xl:grid-cols-2 grid-cols-1">
      <ImageSection />
      <TextSection />
    </SectionContent>
  )
}
