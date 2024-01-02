import { Discord, GitHub, Twitter } from "@modules/app/modules/icon/components"
import { FooterLink } from "./interfaces"
import { CHACA_LINKS } from "@containers/LandigPage/constants/Links"
import { Link } from "./components"

export default function Footer() {
  const LINKS: Array<FooterLink> = [
    { icon: GitHub, link: CHACA_LINKS.GITHUB },
    { icon: Twitter, link: CHACA_LINKS.TWITTER },
    { icon: Discord, link: CHACA_LINKS.DISCORD },
  ]

  return (
    <div className="w-full px-8">
      <div className="flex justify-between border-t-[1px] border-scale-10 py-2 mt-2">
        <div className="flex gap-x-5">
          {LINKS.map((link, index) => (
            <Link icon={link.icon} route={link.link} key={index} />
          ))}
        </div>

        {/* <ThemeSwitch /> */}
      </div>
    </div>
  )
}
