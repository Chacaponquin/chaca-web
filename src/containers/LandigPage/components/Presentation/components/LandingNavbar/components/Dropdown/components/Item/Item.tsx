interface Props {
  text: string
}

export default function Item({ text }: Props) {
  return (
    <div className="transition-all duration-200 text-white py-3 text-lg w-full hover:bg-gray-50/20 px-8">
      {text}
    </div>
  )
}
