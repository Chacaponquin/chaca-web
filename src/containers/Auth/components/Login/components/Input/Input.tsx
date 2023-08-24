import { Private, User } from "@modules/app/modules/icon/components"
import { useState } from "react"
import clsx from "clsx"

export default function Input({
  type,
  onChange,
  icon,
  placeholder,
}: {
  icon: "email" | "password"
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}) {
  const [focus, setFocus] = useState(false)

  const divClass = clsx("rounded-md flex w-full inputText", {
    "inputText-focus": focus,
  })

  return (
    <div className={divClass}>
      <div className="px-4 border-r-2 flex justify-center items-center">
        {icon === "email" && <User />}
        {icon === "password" && <Private />}
      </div>

      <input
        type={type}
        className={"w-full outline-none py-3 px-5"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        required
        name={type}
      />
    </div>
  )
}
