import { Argument, ArgumentsObject } from "@modules/schemas/interfaces/argument.interface"
import ArgumentFilter from "@modules/shared/components/ArgumentFilter/ArgumentFilter"
import { useLanguage } from "@modules/app/modules/language/hooks"

export default function OptionArgumentsSection({
  optionArguments,
  args,
  handleChangeArguments,
}: {
  optionArguments: Argument[]
  handleChangeArguments: (key: string, value: unknown) => void
  args: ArgumentsObject
}) {
  const { ARGUMENTS_TEXT } = useLanguage({ ARGUMENTS_TEXT: { en: "Parameters", es: "Parámetros" } })

  return (
    <div className='flex flex-col w-full'>
      <h1 className='font-fontBold text-lg'>{ARGUMENTS_TEXT}</h1>

      <div className='grid grid-cols-2 gap-x-7 gap-y-2'>
        {optionArguments.map((a, i) => (
          <div key={i} className='flex gap-x-2 items-center'>
            <p>{a.argument}:</p>
            <ArgumentFilter
              value={args[a.argument]}
              arg={a}
              handleChangeArgumentValue={(v) => handleChangeArguments(a.argument, v)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
