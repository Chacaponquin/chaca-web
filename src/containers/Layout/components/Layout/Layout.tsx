import { Fragment } from "react"
import { Helmet } from "react-helmet"

interface Props {
  children: React.ReactNode
  description: string
  title: string
}

export default function Layout({ children, description, title }: Props) {
  return (
    <Fragment>
      <Helmet>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      {children}
    </Fragment>
  )
}
