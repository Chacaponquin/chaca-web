import { LinkButton } from "./components"
import { useLinks } from "./hooks"

export default function Links() {
  const { LINKS } = useLinks()

  return (
    <div className="flex gap-x-6 mt-7 flex-wrap esm:justify-around gap-y-4">
      {LINKS.map((link, index) => (
        <LinkButton link={link.link} title={link.title} key={index} icon={link.icon} />
      ))}
    </div>
  )
}
