import { NavbarLink } from "@containers/Landing/components/Presentation/components/Navbar/interfaces"
import { Link } from "react-router-dom"
import { Footer, Item } from "./components"

interface Props {
  links: NavbarLink[]
}

export default function Dropdown({ links }: Props) {
  return (
    <div className="w-full px-3 md:hidden block">
      <div className="flex flex-col z-[995] w-full bg-scale-4 rounded-md shadow-lg">
        <div>
          {links.map((link, index) => (
            <Link to={link.route} key={index}>
              <Item text={link.title} isFirst={index === 0} />
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}
