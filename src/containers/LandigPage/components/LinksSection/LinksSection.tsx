import { LinkButton } from "./components"
import { LINKS } from "../../constants/Links"

export default function LinksSection() {
  return (
    <div className='w-full bg-darkColor lg:py-20 py-14 flex justify-center px-10 esm:py-10'>
      <div className='flex items-center w-full max-w-[1000px] xl:flex-row xl:justify-between gap-5 flex-col justify-center'>
        <LinkButton link={LINKS.GITHUB} type='github' />
        <LinkButton link={LINKS.NPM} type='npm' />
      </div>
    </div>
  )
}
