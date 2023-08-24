import React from "react"

export default function Label({ htmlFor, text }: { htmlFor: string; text: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-0 text-lg whitespace-nowrap font-fontMedium">
      {text}:
    </label>
  )
}
