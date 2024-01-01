import { Header, Text } from "./components"

interface Props {
  firstHeader: string
  secondHeader: string
  text: string
}

export default function TextSection({ firstHeader, secondHeader, text }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <Header firstHeader={firstHeader} secondHeader={secondHeader} />
      <Text text={text} />
    </div>
  )
}
