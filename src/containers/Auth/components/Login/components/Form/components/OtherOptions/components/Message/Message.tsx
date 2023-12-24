import { useTranslation } from "@modules/app/modules/language/hooks"

export default function Message() {
  const { MESSAGE } = useTranslation({ MESSAGE: { en: "or login with", es: "o usa tu cuenta en" } })

  return (
    <div className="flex w-full justify-center items-center gap-x-3 mb-10">
      <div className="w-full h-[2px] dark:bg-scale-11 bg-scale-10"> </div>
      <p className="text-xl dark:text-scale-11 text-scale-10 whitespace-nowrap">{MESSAGE}</p>
      <div className="w-full h-[2px] dark:bg-scale-11 bg-scale-10"></div>
    </div>
  )
}
