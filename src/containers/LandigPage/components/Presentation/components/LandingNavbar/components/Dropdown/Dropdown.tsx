import { NavbarLink } from "@containers/LandigPage/components/Presentation/components/LandingNavbar/interfaces"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Footer, Item } from "./components"
import { ExternalLink } from "@modules/app/components"

interface Props {
  links: Array<NavbarLink>
}

export default function Dropdown({ links }: Props) {
  return (
    <div className="w-full px-3 md:hidden block">
      <div className="flex flex-col z-[995] w-full bg-scale-4 rounded-md">
        <div>
          {links.map((link, index) => (
            <Fragment key={index}>
              {link.external ? (
                <ExternalLink route={link.route}>
                  <Item text={link.title} />
                </ExternalLink>
              ) : (
                <Link to={link.route}>
                  <Item text={link.title} />
                </Link>
              )}
            </Fragment>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}
