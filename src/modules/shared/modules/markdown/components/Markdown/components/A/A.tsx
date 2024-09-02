import { ExternalLink } from "@modules/app/components"
import clsx from "clsx"
import { Fragment } from "react"
import { Link } from "react-router-dom"

interface Props {
  children: React.ReactNode
  href: string
  title: string
}

export default function A({ href, children, title }: Props) {
  const CLASS = clsx(
    "underline underline-offset-2",
    "text-purple-5",
    "transition-all duration-200",
    "hover:opacity-70",
  )

  return (
    <Fragment>
      {href.startsWith("/") ? (
        <Link to={`/docs` + href} title={title} className={CLASS}>
          {children}
        </Link>
      ) : (
        <ExternalLink route={href}>{children}</ExternalLink>
      )}
    </Fragment>
  )
}
