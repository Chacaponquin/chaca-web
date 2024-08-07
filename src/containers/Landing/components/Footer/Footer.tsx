import { SectionContent } from "@containers/Landing/shared/components"
import { Left, Right } from "./components"
import { useFooter } from "./hooks"

export default function Footer() {
  const { LINKS } = useFooter()

  return (
    <footer className="flex justify-center border-t-[1px] border-scale-11 w-full py-7">
      <SectionContent className="flex justify-between items-center md:flex-row flex-col gap-4">
        <Left />
        <Right links={LINKS} />
      </SectionContent>
    </footer>
  )
}
