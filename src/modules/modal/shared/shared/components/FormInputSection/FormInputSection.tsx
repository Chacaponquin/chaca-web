import { Label } from ".."

interface Props {
  labelText: string
  id: string
  children: React.ReactNode
}

export default function FormInputSection({ labelText, id, children }: Props) {
  return (
    <section className="flex flex-col w-full">
      <Label htmlFor={id} text={labelText} />
      {children}
    </section>
  )
}
