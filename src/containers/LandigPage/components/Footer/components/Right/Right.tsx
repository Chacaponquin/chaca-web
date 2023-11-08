import { Link } from "react-router-dom"
import { FooterLink } from "../../interfaces"

interface Props {
  links: Array<FooterLink>
}

export default function Right({ links }: Props) {
  return (
    <div className="flex gap-x-10">
      {links.map((link, index) => (
        <Link to={link.link} key={index}>
          <button className="flex stroke-white fill-white p-2 rounded hover:bg-scale-12/10">
            {link.icon({ size: 30 })}
          </button>
        </Link>
      ))}
    </div>
  )
}
