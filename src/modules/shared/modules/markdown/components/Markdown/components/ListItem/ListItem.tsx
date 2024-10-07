import React from "react"

interface Props {
  children: React.ReactNode
}

export default function ListItem({ children }: Props) {
  return (
    <div className="flex items-start w-full mb-1.5">
      <div className="pr-4" style={{ transform: "translateY(15px)" }}>
        <div className="min-w-[6px] min-h-[6px] rounded-full bg-black dark:bg-white"></div>
      </div>

      <div className="w-full flex flex-col">{children}</div>
    </div>
  )
}
