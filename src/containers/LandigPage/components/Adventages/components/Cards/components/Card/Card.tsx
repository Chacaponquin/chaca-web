import { IconProps } from "@modules/app/modules/icon/interfaces"

interface Props {
  content: string
  title: string
  icon: React.FC<IconProps>
}

export default function Card({ content, title, icon }: Props) {
  return (
    <div className="cursor-pointer border-[1px] border-scale-9 transition-all duration-300 hover:border-purple-7 py-6 px-10 text-white rounded flex flex-col w-[580px] bg-scale-3">
      <div className="flex gap-x-4 stroke-white items-center">
        {icon({ size: 30 })}
        <h1 className="font-fontMedium text-xl">{title}</h1>
      </div>

      <p className="text-lg text-scale-10 mt-2">{content}</p>
    </div>
  )
}
