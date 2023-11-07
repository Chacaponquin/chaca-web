import { ImageSection, TextSection } from "./components"

export default function LinksSection() {
  return (
    <section className="w-full py-20 max-w-[1200px] grid grid-cols-2">
      <ImageSection />
      <TextSection />
    </section>
  )
}
