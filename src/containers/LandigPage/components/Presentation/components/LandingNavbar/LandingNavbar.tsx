import { Fragment } from "react"
import { BarLink, Dropdown, Logo, RightSide } from "./components"
import { useNavbar } from "./hooks"
import { Link } from "react-router-dom"
import { ExternalLink } from "@modules/app/components"
import clsx from "clsx"

export default function LandingNavbar() {
  const { LINKS, handleChange, open } = useNavbar()

  const BAR_CLASS = clsx(
    "flex items-center justify-between",
    "w-full z-50 bg-transparent",
    "gap-8",
    "esm:px-5 py-4 px-10",
    "transition-all duration-100",
  )

  return (
    <nav className="absolute top-0 w-full bg-scale-2">
      <div className={BAR_CLASS}>
        <Logo handleChange={handleChange} open={open} />

        <div className="xl:flex hidden items-center gap-1">
          {LINKS.map((link, i) => (
            <Fragment key={i}>
              {link.external ? (
                <ExternalLink route={link.route}>
                  <BarLink text={link.title} />
                </ExternalLink>
              ) : (
                <Link to={link.route}>
                  <BarLink text={link.title} />
                </Link>
              )}
            </Fragment>
          ))}
        </div>

        <RightSide />
      </div>

      {open && <Dropdown links={LINKS} />}
    </nav>
  )
}
