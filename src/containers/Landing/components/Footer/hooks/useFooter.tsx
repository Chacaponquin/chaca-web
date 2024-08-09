import { useMemo } from "react"
import { FooterLink } from "../interfaces"
import { Discord, GitHub, Twitter } from "@modules/app/modules/icon/components"
import { CHACA_LINKS } from "@modules/shared/domain/links"

export default function useFooter() {
  const LINKS: Array<FooterLink> = useMemo(() => {
    return [
      { icon: GitHub, title: "Github", link: CHACA_LINKS.GITHUB },
      { icon: Discord, title: "Discord", link: CHACA_LINKS.DISCORD },
      { icon: Twitter, title: "Twitter", link: CHACA_LINKS.TWITTER },
    ]
  }, [])

  return { LINKS }
}
