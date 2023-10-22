import { Logo as AppLogo } from "@modules/app/components"

export default function Logo() {
  return (
    <div className="flex items-center gap-x-5">
      <AppLogo size={60} />
      <h1 className="font-fontBold text-white text-2xl uppercase esm:hidden">CHACA</h1>
    </div>
  )
}
