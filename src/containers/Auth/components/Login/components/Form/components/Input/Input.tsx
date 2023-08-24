import { Key, User } from "@modules/app/modules/icon/components"
import { useState } from "react"
import clsx from "clsx"
import { LoginUserDTO } from "@modules/user/dto/user"

export default function Input({
  type,
  onChange,
  placeholder,
}: {
  type: keyof LoginUserDTO
  onChange: (k: keyof LoginUserDTO, v: string) => void
  placeholder: string
}) {
  const [focus, setFocus] = useState(false)

  const divClass = clsx("rounded-md flex w-full inputText", {
    "inputText-focus": focus,
  })

  const ICON_SIZE = 22

  return (
    <section className={divClass}>
      <div className="px-4 border-r-2 flex justify-center items-center stroke-black">
        {type === "email" && <User size={ICON_SIZE} />}
        {type === "password" && <Key size={ICON_SIZE} />}
      </div>

      <input
        type={type}
        className={"w-full outline-none py-3 px-5 rounded-tr-md rounded-br-md"}
        placeholder={placeholder}
        onChange={(e) => onChange(type, e.target.value)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        required
        name={type}
      />
    </section>
  )
}
