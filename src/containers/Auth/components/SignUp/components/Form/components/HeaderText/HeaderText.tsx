import { useLanguage } from "@modules/app/modules/language/hooks"

export default function HeaderText() {
  const { COMPLETE_FORM_TEXT, WELCOME_TEXT } = useLanguage({
    COMPLETE_FORM_TEXT: {
      en: "Complete the form to continue",
      es: "Completa el formulario para continuar",
    },
    WELCOME_TEXT: { en: "Welcome to", es: "Bienvenido a" },
  })

  return (
    <section className="w-full flex flex-col esm:items-center">
      <div className="font-fontTitle text-left sm:text-6xl mb-3 whitespace-nowrap text-4xl esm:flex-wrap esm:whitespace-normal">
        {WELCOME_TEXT}{" "}
        <p className="inline uppercase font-fontTitle text-transparent bg-clip-text bg-gradient-to-br from-principalColor to-secondColor">
          CHACA!
        </p>
      </div>
      <p className="text-slate-400 text-2xl esm:text-xl">{COMPLETE_FORM_TEXT}</p>
    </section>
  )
}
