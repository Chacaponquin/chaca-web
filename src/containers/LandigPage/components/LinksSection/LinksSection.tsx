import { LinkButton } from "./components"
import { LINKS } from "../../constants/Links"

export default function LinksSection() {
  return (
    <div className='w-screen bg-darkColor py-20 flex justify-center'>
      <div className='flex items-center w-[1000px] justify-between'>
        <LinkButton link={LINKS.GITHUB} type='github' />
        <LinkButton link={LINKS.NPM} type='npm' />
      </div>
    </div>
  )
}
