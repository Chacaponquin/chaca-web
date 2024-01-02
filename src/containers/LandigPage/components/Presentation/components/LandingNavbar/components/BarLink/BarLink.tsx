interface Props {
  text: string
}

export default function BarLink({ text }: Props) {
  return (
    <div className="text-xl py-1 text-white mx-5 transition-all duration-300 hover:text-purple-6">
      {text}
    </div>
  )
}
