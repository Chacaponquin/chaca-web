import React from "react"
import { DocsConfigHeader, DocsMenu } from "./components"

export default function EditDocumentation() {
  return (
    <div className='w-full h-screen flex'>
      <DocsMenu />

      <div className='h-full w-full'>
        <DocsConfigHeader />
      </div>
    </div>
  )
}
