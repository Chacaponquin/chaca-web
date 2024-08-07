import { Logo as AppLogo } from "@modules/app/components"
import { Menu } from "./components"

interface Props {
  handleChange(): void
  open: boolean
}

export default function Logo({ handleChange, open }: Props) {
  return (
    <div className="flex gap-x-4 items-center">
      <Menu handleChange={handleChange} open={open} />

      <div className="flex items-center gap-x-5">
        <AppLogo size={50} />
        <h1 className="font-fontMedium text-white text-2xl uppercase md:block hidden">CHACA</h1>
      </div>
    </div>
  )
}
