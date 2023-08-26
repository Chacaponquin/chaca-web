import React from "react"

export default function FormSection({
  children,
  label,
  id,
}: {
  children: React.ReactElement
  label: string
  id: string
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-lg font-fontMedium">
        {label}:
      </label>
      {children}
    </div>
  )
}
