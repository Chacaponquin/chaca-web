import React from "react"

interface Props {
  children: React.ReactElement
  label: string
  id: string
}

export default function FormSection({ children, label, id }: Props) {
  return (
    <section className="flex flex-col">
      <label htmlFor={id} className="text-lg font-fontMedium dark:text-white">
        {label}:
      </label>
      {children}
    </section>
  )
}
