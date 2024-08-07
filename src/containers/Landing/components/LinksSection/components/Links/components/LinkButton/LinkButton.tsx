import { IconProps } from "@modules/app/modules/icon/interfaces"

interface Props {
  link: string
  title: string
  icon: React.FC<IconProps>
}

export default function LinkButton({ link, title, icon }: Props) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className="text-white stroke-white fill-white border-[1px] border-scale-10 rounded bg-scale-5 px-4 py-1.5 flex items-center gap-x-4 hover:opacity-75">
        {icon({ size: 25 })}

        <p className="text-lg">{title}</p>
      </button>
    </a>
  )
}
