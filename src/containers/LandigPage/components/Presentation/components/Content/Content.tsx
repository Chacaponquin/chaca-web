import { Buttons, Text } from "./components"

export default function Content() {
  return (
    <div className="w-full text-center flex justify-center px-10 pt-32 text-white flex-col items-center">
      <div className="max-w-[900px]">
        <Text />
        <Buttons />
      </div>
    </div>
  )
}
