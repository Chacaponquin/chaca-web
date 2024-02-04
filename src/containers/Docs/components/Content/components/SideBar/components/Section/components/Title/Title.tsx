import { ArrowDown } from "@modules/app/modules/icon/components"

interface Props {
  title: string
}

export default function Title({ title }: Props) {
  return (
    <div className="flex rounded py-2 px-4 w-full justify-between stroke-black cursor-pointer duration-300 hover:bg-scale-11/30">
      <p className="text-lg">{title}</p>

      <button>
        <ArrowDown size={24} />
      </button>
    </div>
  )
}
