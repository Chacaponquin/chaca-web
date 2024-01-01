import { Header, Text } from "./components"

interface Props {
  firstHeader: string
  secondHeader: string
}

export default function TextSection({ firstHeader, secondHeader }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <Header firstHeader={firstHeader} secondHeader={secondHeader} />
      <Text />
    </div>
  )
}
