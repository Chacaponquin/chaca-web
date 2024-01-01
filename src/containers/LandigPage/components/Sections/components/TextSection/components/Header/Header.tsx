interface Props {
  firstHeader: string
  secondHeader: string
}

export default function Header({ firstHeader, secondHeader }: Props) {
  return (
    <header className="flex flex-col gap-2 text-5xl esm:text-4xl text-white">
      <h1 className="font-fontBold whitespace-nowrap esm:whitespace-break-spaces">{firstHeader}</h1>
      <h1 className="text-purple-6 font-fontBold whitespace-nowrap esm:whitespace-break-spaces">
        {secondHeader}
      </h1>
    </header>
  )
}
