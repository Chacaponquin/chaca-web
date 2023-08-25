import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

interface LayoutProps {
  children: React.ReactElement
  description: string
  title: string
}

export default function Layout({ children, description, title }: LayoutProps) {
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
