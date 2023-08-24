import { useLanguage } from "@modules/app/modules/language/hooks"

export default function PresentationText() {
  const { LOGIN_TEXT, WELCOME_BACK_TEXT } = useLanguage({
    WELCOME_BACK_TEXT: { en: "Welcome Back!", es: "Bienvenido!" },
    LOGIN_TEXT: { en: "Login to continue", es: "Pon tus datos para continuar" },
  })

  return (
    <div className="w-full flex flex-col esm:items-center">
      <h1 className="font-fontTitle text-6xl mb-3 whitespace-nowrap esm:text-5xl">
        {WELCOME_BACK_TEXT}
      </h1>
      <p className="text-slate-400 text-2xl esm:text-xl">{LOGIN_TEXT}</p>
    </div>
  )
}
