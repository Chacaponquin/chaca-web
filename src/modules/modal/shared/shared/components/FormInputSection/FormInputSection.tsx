import { Label } from ".."

export default function FormInputSection({
  labelText,
  id,
  children,
}: {
  labelText: string
  id: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col w-full">
      <Label htmlFor={id} text={labelText} />
      {children}
    </section>
  )
}
