import { SectionContent } from "@containers/Landing/shared/components"
import { Buttons, Text } from "./components"

export default function Content() {
  return (
    <div className="w-full text-center flex justify-center pt-32 esm:pt-32 text-white flex-col items-center">
      <SectionContent>
        <Text />
        <Buttons />
      </SectionContent>
    </div>
  )
}
