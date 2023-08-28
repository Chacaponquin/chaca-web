import React from "react"

export default function FormSection({
  children,
  id,
  labelText,
}: {
  children: React.ReactElement
  labelText: string
  id: string
}) {
  return (
    <section className="flex flex-col">
      <label htmlFor={id} className="text-xl font-fontBold mb-1 esm:text-lg">
        {labelText}:
      </label>
      {children}
    </section>
  )
}
