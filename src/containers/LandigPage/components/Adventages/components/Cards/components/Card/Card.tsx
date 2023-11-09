interface Props {
  content: string
  title: string
  icon: string
}

export default function Card({ content, title, icon }: Props) {
  return (
    <div className="cursor-pointer border-[1px] border-scale-9 transition-all duration-300 hover:border-purple-7 py-6 px-10 text-white rounded flex flex-col bg-scale-3">
      <div className="flex flex-col gap-y-3 items-start">
        <div className="text-3xl p-3 rounded bg-scale-5">
          <p>{icon}</p>
        </div>

        <h1 className="font-fontMedium text-xl">{title}</h1>
      </div>

      <p className="text-lg text-scale-10 mt-2">{content}</p>
    </div>
  )
}
