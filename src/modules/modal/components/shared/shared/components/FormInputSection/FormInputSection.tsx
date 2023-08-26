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
    <section className="flex items-center justify-between w-full gap-3">
      <Label htmlFor={id} text={labelText} />
      {children}
    </section>
  )
}
