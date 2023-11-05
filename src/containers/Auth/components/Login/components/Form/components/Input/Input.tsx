import { Key, User } from "@modules/app/modules/icon/components"
import { useState } from "react"
import clsx from "clsx"
import { LoginForm } from "@containers/Auth/components/Login/interfaces"

interface Props {
  type: keyof LoginForm
  onChange: (k: keyof LoginForm, v: string) => void
  placeholder: string
}

export default function Input({ type, onChange, placeholder }: Props) {
  const [focus, setFocus] = useState(false)

  const divClass = clsx(
    "rounded flex w-full transition-all appearance-none",
    "border-[1px] border-scale-7 dark:border-white hover:border-purple-6",
    "text-scale-7 dark:text-scale-11",
    "bg-white dark:bg-scale-5",
    {
      "outline-none outline-offset-0": focus,
      "shadow-input shadow-purple-4 dark:shadow-purple-6": focus,
    },
  )

  const ICON_SIZE = 22

  return (
    <section className={divClass}>
      <div className="px-4 border-r-[1px] flex justify-center items-center stroke-black dark:stroke-white dark:fill-white">
        {type === "email" && <User size={ICON_SIZE} />}
        {type === "password" && <Key size={ICON_SIZE} />}
      </div>

      <input
        type={type}
        className="w-full text-lg outline-none py-3 px-5 rounded-tr-md rounded-br-md bg-white dark:bg-scale-5"
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
