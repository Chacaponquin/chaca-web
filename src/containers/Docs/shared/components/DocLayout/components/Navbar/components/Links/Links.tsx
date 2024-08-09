import { IconButton } from "@form/components"
import { ExternalLink } from "@modules/app/components"
import { GitHub, Twitter } from "@modules/app/modules/icon/components"
import { IconProps } from "@modules/app/modules/icon/interfaces"
import { CHACA_LINKS } from "@modules/shared/domain/links"

interface ILink {
  name: string
  url: string
  icon: React.FC<IconProps>
}

export default function Links() {
  const links: ILink[] = [
    { icon: GitHub, name: "Github", url: CHACA_LINKS.GITHUB },
    { icon: Twitter, name: "X", url: CHACA_LINKS.TWITTER },
  ]

  return (
    <section className="flex items-center gap-x-1 sm:gap-x-2">
      {links.map((l, index) => (
        <ExternalLink key={index} route={l.url}>
          <IconButton icon={l.icon} size={23} space="base" />
        </ExternalLink>
      ))}
    </section>
  )
}
