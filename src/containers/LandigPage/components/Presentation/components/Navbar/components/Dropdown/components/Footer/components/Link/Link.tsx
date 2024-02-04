import { ExternalLink } from "@modules/app/components"
import { IconProps } from "@modules/app/modules/icon/interfaces"

interface Props {
  icon: React.FC<IconProps>
  route: string
}

export default function Link({ icon, route }: Props) {
  return (
    <ExternalLink route={route}>
      <div className="stroke-white fill-white p-2.5 transition-all duration-200 hover:bg-scale-10/50 rounded">
        {icon({ size: 25 })}
      </div>
    </ExternalLink>
  )
}
