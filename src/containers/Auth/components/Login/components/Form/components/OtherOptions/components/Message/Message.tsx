import { useLanguage } from "@modules/app/modules/language/hooks"

export default function Message() {
  const { MESSAGE } = useLanguage({ MESSAGE: { en: "or login with", es: "o usa tu cuenta en" } })

  return (
    <div className="flex w-full justify-center items-center gap-x-3 mb-10">
      <div className="w-full h-[3px] dark:bg-scale-11"> </div>
      <p className="text-xl dark:text-scale-11 whitespace-nowrap">{MESSAGE}</p>
      <div className="w-full h-[3px] dark:bg-scale-11"></div>
    </div>
  )
}
